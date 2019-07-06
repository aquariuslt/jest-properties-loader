workflow "workflow/ci" {
  on = "push"
  resolves = ["ci"]
}

action "install" {
  uses = "actions/npm@master"
  runs = "yarn"
}

action "test" {
  uses = "actions/npm@master"
  needs = ["install"]
  runs = "yarn"
  args = "test"
}

action "ci" {
  uses = "Atrox/codecov-action@v0.1.2"
  needs = ["test"]
  secrets = ["CODECOV_TOKEN"]
}

workflow "release" {
  on = "release"
  resolves = ["npm:release"]
}

action "filter:release" {
  uses = "actions/bin/filter@master"
  args = "action created*"
}


action "npm:release" {
  needs = "filter:release"
  uses = "actions/npm@master"
  secrets = ["NPM_AUTH_TOKEN"]
  args = "publish"
}
