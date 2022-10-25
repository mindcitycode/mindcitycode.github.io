import { existsSync } from 'node:fs'
import fs from 'node:fs/promises'
import path from 'path'

const usage = `node ./src/createReadmeFromPackageFile.js [--force] d:\src\soumde\package.json`

// process argv 
const argv = [...process.argv.slice(2)]
const params = { force: false, packageFileFilename: undefined }
if (argv[0] === '--force') {
    params.force = true
    argv.splice(0, 1)
}
params.packageFileFilename = argv[0]

// read package file
let packageJson
try {
    packageJson = JSON.parse(await fs.readFile(params.packageFileFilename, 'utf8'))
} catch (e) {
    console.error('not a package.json file :', params.packageFileFilename)
    console.error('usage', usage)
    process.exit(1)
}

console.log('package.json:', params.packageFileFilename)
console.log('force if present:', params.force)


// look for existing README
const projectDirectory = path.dirname(params.packageFileFilename)
const readmePath = path.join(projectDirectory, 'README.md')

const readmeExists = existsSync(readmePath)

if (readmeExists && (!params.force)) {
    console.error('README exists', readmePath)
    process.exit(0)
} else {
    if (readmeExists) {
        console.error('update README', readmePath)
    } else {
        console.error('create README', readmePath)
    }
}

const markdown = []

markdown.push(
    `# ${packageJson.name}`,
    `${packageJson.description}`,
)

const screenshotFilename = 'screenshot.png'
const screenshotPath = path.join(projectDirectory, screenshotFilename)
const screenshotExists = existsSync(screenshotPath)

if (screenshotExists) {
    markdown.push(
        `![a screenshot](/${screenshotFilename}?raw=true "screenshot")`
    )
}

const usageFilename = 'usage.md'
const usagePath = path.join(projectDirectory, usageFilename)
const usageExists = existsSync(usagePath)

if (usageExists) {
    const usageMarkdown = await fs.readFile(usagePath, 'utf8')
    markdown.push(
        '## usage',
        usageMarkdown
    )
}
import { mdAddInstance } from './mdInstance.js'
mdAddInstance(packageJson, markdown)

if (packageJson.scripts?.serve || packageJson.scripts?.build) {
    markdown.push(`## setup`)
    if (packageJson.scripts.serve) {
        markdown.push(
            'developpement',
            [
                '    npm install',
                '    npm run serve'
            ].join("\n")
        )
    }
    if (packageJson.scripts.build) {
        markdown.push(
            'build',
            [
                '    npm install',
                '    npm run build'
            ].join("\n")
        )
    }
}

if (packageJson.license) {
    markdown.push(
        `## license`,
        `${packageJson.name} is licensed under the ${packageJson.license} license`
    )
}
const markdownText = markdown.join("\n\n")


// console.log(markdownText)
async function testWrite() {
    const testPath = './test'
    await fs.mkdir(testPath, { recursive: true })
    const testReadmePath = path.join(testPath, `${packageJson.name}.md`)
    await fs.writeFile(testReadmePath, markdownText, 'utf8')
    console.log('wrote', testReadmePath)
}

await fs.writeFile(readmePath, markdownText, 'utf8')
console.log('wrote', readmePath)

