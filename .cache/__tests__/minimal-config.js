const path = require(`path`)
const child = require(`child_process`)

it(`Builds cache-dir with minimal config`, done => {
  const args = [
    require.resolve(`@babel/cli/bin/babel.js`),
    path.join(__dirname, `..`),
    `--config-file`,
    path.join(__dirname, `.babelrc`),
<<<<<<< HEAD
<<<<<<< HEAD
=======
    `--ignore`,
    `**/__tests__`,
>>>>>>> develop
=======
    `--ignore`,
    `**/__tests__`,
>>>>>>> develop
  ]

  const spawn = child.spawn(process.execPath, args)

  let stderr = ``
  let stdout = ``

<<<<<<< HEAD
<<<<<<< HEAD
  spawn.stderr.on(`data`, function (chunk) {
    stderr += chunk
  })

  spawn.stdout.on(`data`, function (chunk) {
    stdout += chunk
  })

  spawn.on(`close`, function () {
=======
=======
>>>>>>> develop
  spawn.stderr.on(`data`, function(chunk) {
    stderr += chunk
  })

  spawn.stdout.on(`data`, function(chunk) {
    stdout += chunk
  })

  spawn.on(`close`, function() {
<<<<<<< HEAD
>>>>>>> develop
=======
>>>>>>> develop
    expect(stderr).toEqual(``)
    expect(stdout).not.toEqual(``)
    done()
  })
}, 30000)
