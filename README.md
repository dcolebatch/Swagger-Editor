Swagger Editor
======================

Introduction
----------------

This project contains a Swagger Editor with a KOA Middleware attached to it that will save the YAML to the file system of an OpenShift container.

There is also an endpoint that can be consumed by other services that require a Swagger definition.

Installation
----------------

As this is a Node.js application, you can run it locally using node.

npm install
npm start

The application is normally deployed to OpenShift, however will work in any evironment that supports Node.js

TODO:

A future improvement would be to extend the middleware support such that the swagger definition can be stored in git.

Contribution
------------

Please report any [issues](https://github.com/bcgov/Swagger-Editor/issues).

[Pull requests](https://github.com/bcgov/Swagger-Editor/pulls) are always welcome.

If you would like to contribute, please see our [contributing](CONTRIBUTING.md) guidelines.

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

License
-------

    Copyright 2016 Province of British Columbia

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at 

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

Maintenance
-----------

This repository is maintained by [BC Ministry of Transportation](http://www.th.gov.bc.ca/).
Click [here](https://github.com/orgs/bcgov/teams/tran/repositories) for a complete list of our repositories on GitHub.
