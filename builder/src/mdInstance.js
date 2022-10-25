export function mdAddInstance(packageJson, markdown) {
    if (packageJson.deploymentsExample) {
        if (!packageJson.deploymentsExample.startsWith('no')) {
            const url = packageJson.deploymentsExample
            markdown.push(
                `## deployed instance`,
                `an instance might be running here : [${url}](${url})`
            )
        }
    } else {
        const url = `https://mindcitycode.github.io/pages/${packageJson.name}/dist`
        markdown.push(
            `## instance`,
            `an instance might be running here : [${url}](${url})`
        )
    }
}
