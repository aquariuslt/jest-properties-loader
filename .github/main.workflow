workflow "workflow/ci" {
  on = "push"
  resolves = ["test"]
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

workflow "release" {
  on = "release"
  resolves = ["npm:login"]
}

action "npm:login" {
  uses = "actions/npm@master"
  secrets = ["NPM_AUTH_TOKEN"]
  runs = "echo"
}
