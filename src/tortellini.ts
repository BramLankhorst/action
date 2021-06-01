// TODO remove once the issues have been resolved
// import {exec} from '@actions/exec'

// type Repository = {
//     owner: string
//     repo: string
// }
// type Repositories = Repository[]
// type RunType = 'local-path' | 'list-of-repositories'

// export class Tortellini {
//     private repositories: Repositories

//     constructor(repositories: Repositories) {
//         this.repositories = repositories
//     }

//     analyze(owner: string, repo: string): void {
//         const cwd = process.cwd()
//         const bindMountInput = `${cwd}/in/${owner}/${repo}:/project`
//         const bindMountOutput = `${cwd}/out/${owner}/${repo}:/out`
//         const image = 'philipssoftware/ort'
//         exec(
//             `docker run --rm -v ${bindMountInput} -v ${bindMountOutput} ${image} analyze -i /project -o /out`
//         )
//     }

//     clone(owner: string, repo: string): void {
//         exec(
//             `git clone https://github.com/${owner}/${repo} in/${owner}/${repo}`
//         )
//     }

//     /* eslint-disable @typescript-eslint/no-unused-vars */
//     evaluate(owner: string, repo: string): void {}
//     /* eslint-enable @typescript-eslint/no-unused-vars */

//     run(type: RunType): void {
//         switch (type) {
//             case 'list-of-repositories': {
//                 for (const repository of this.repositories) {
//                     const {owner, repo} = repository
//                     this.clone(owner, repo)
//                     this.analyze(owner, repo)
//                 }
//                 break
//             }
//             case 'local-path': {
//                 // statements
//                 console.log('analyze path on local system in this clause')
//                 break
//             }
//         }
//     }

//     /* eslint-disable @typescript-eslint/no-unused-vars */
//     report(owner: string, repo: string): void {}
//     /* eslint-enable @typescript-eslint/no-unused-vars */
// }
