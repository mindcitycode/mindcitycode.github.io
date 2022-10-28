// usage :
//
// cd builder && node src/index.js

import fetch from 'node-fetch'
import { existsSync, readFileSync, writeFileSync } from 'fs'
import { mkdir, rename, rm } from 'fs/promises'
import path from 'path'
import shell from 'shelljs'
import { mdAddInstance } from './mdInstance.js'

const USE_GITHUB_REPO_LIST = true

const url = "https://api.github.com/users/mindcitycode/repos"
const settings = {}

const BUILDS_PATH = path.resolve('./builds')
const KEEP_PATH = path.resolve('./keep/')
const PAGES_PATH = path.resolve(path.join(KEEP_PATH, 'pages'))

const markdown = [
    '# mindcitycode.github.io'
]
const reposBlackList = [
    'mindcitycode/mindcitycode.github.io',
    'mindcitycode/mindcitycode',
    'mindcitycode/guides',
    'mindcitycode/ploufixes'
]
const reposNoWebBlackList = [
    'mindcitycode/yaytdlgui',
    'mindcitycode/sutom-solve-cli',
    'mindcitycode/siouver',
]
const go = async () => {

    console.log('remove dirs')
    await rm(BUILDS_PATH, { recursive: true, force: true })
    await rm(KEEP_PATH, { recursive: true, force: true })
    await rm(PAGES_PATH, { recursive: true, force: true })

    console.log('create dirs')
    await mkdir(BUILDS_PATH, { recursive: true })
    await mkdir(KEEP_PATH, { recursive: true })
    await mkdir(PAGES_PATH, { recursive: true })

    let repos

    if (USE_GITHUB_REPO_LIST) {
        repos = await fetch(url, settings).then(res => res.json())
        writeFileSync('repos.json', JSON.stringify(repos), 'utf8')
    } else {
        repos = JSON.parse(readFileSync("./repos.json", 'utf8'))
    }

    //    repos.length = 1


    for (let i = 0; i < repos.length; i++) {
        const repo = repos[i]
        if (reposBlackList.includes(repo.full_name))
            continue;

        console.log(`repo : ${repo.full_name}`)
        //        console.log(repo.git_url)
        //      console.log(repo.clone_url)

        shell.cd(BUILDS_PATH)
        shell.exec(`git clone ${repo.clone_url}`)

        shell.cd(repo.name)
        shell.exec('git pull')

        const packageDotJson = JSON.parse(readFileSync(path.join(BUILDS_PATH, repo.name, 'package.json'), 'utf8'))
        markdown.push(`## ${repo.name}`)
        markdown.push(packageDotJson.description)

        const hasScreenshot = existsSync(path.join(BUILDS_PATH, repo.name, 'screenshot.png'))
        if (hasScreenshot) {
            // const mdImageLink = (alt, username, reponame, branch, imagename) => `![${alt}](https://github.com/${username}/${reponame}/blob/${branch}/${imagename}?raw=true)`
            // markdown.push(mdImageLink('a screenshot', repo.owner.login, repo.name, repo.default_branch, 'screenshot.png'))

            const url = (username, reponame, branch, imagename) => `https://github.com/${username}/${reponame}/blob/${branch}/${imagename}?raw=true`
            const htmlImageLink = (alt, src, width) => `<img alt="${alt}" src="${src}" width="${width}">`

            markdown.push(htmlImageLink('a screenshot', url(repo.owner.login, repo.name, repo.default_branch, 'screenshot.png'), '500px'))
        }

        markdown.push( ...mdAddInstance(packageDotJson).slice(1))
        /*
                const deploymentsExample = packageDotJson.deploymentsExample
                if (deploymentsExample){
                    markdown.push(`deployed example instance [${deploymentsExample}](${deploymentsExample})`)
                }
        */

        if (!reposNoWebBlackList.includes(repo.full_name)) {

            //  markdown.push(`[${repo.name}](./pages/${repo.name}/dist/)`)

            shell.exec('npm install')
            shell.exec('npm run build')

            try {
                await mkdir(path.join(PAGES_PATH, repo.name), { recursive: true })
                await rename(
                    path.join(BUILDS_PATH, repo.name, 'dist'),
                    path.join(PAGES_PATH, repo.name, 'dist')
                )
            } catch (e) {
                console.error(e)
            }
        }
    }

    writeFileSync(
        path.join(KEEP_PATH, 'README.md'),
        markdown.join("\n\n"),
        'utf8'
    )
}
go()