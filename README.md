# machinomy.com
Machinomy official page.

## Develop

    $ npm install
    $ gulp serve
    # And go to http://localhost:4000
    
## Build

Not necessary, actually, to do that. `gulp serve` rebuilds the website on any code change.

    $ npm install
    $ gulp build
    # Built website is in dist/
     
## Deploy

In order to deploy the web site, you have to
1. Install [ansible](https://www.ansible.com) at your local machine
2. Have a local copy of SSH key. In the excerpt below it is located in `~/.ssh/ext`

After prerequisites are satisfied, put this in the console:

    $ cd devops/
    $ ansible-playbook deploy.yml -i hosts --private-key=~/.ssh/ext
    
and relax.
