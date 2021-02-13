
### dependency ###
<blockquote>
  <p>Update a depencency located in package.json files of one or more project directories.</p>

  <table border=0 width=100%>
    <tr><th colspan="3"><b>format</b></th></tr>
    <tr><th colspan="3">&gt; batchrun npm dependency &lt;options&gt; [directories]</th></tr>
    <tr><th colspan="3"><b>mandatory options</b></th></tr>
    <tr><td>--pkg</td>
        <td style="text-align:center">string</td>
        <td>packagename</td>
        </tr>
    <tr><td>--version</td>
        <td style="text-align:center">string</td>
        <td><a href="https://docs.npmjs.com/cli/v6/using-npm/semver">semver version</a></td>
        </tr>
    <tr><th colspan="3"><b>additional options</b></th></tr>
    <tr><td>--dev</td>
        <td style="text-align:center">boolean</td>
        <td>update a developer dependency</td>
        </tr>
    <tr><td>--args:from</td>
        <td style="text-align:center">integer</td>
        <td>projectlist index</td>
        </tr>
    <tr><td>--args:to</td>
        <td style="text-align:center">integer</td>
        <td>projectlist index</td>
        </tr>
    <tr><td>--args:index</td>
        <td style="text-align:center">integer</td>
        <td>projectlist index (overrides ranges set by --from and --to)</td>
        </tr>
    <tr><th colspan="3"><b>special options</b></th></tr>
    <tr><td>--help</td>
        <td style="text-align:center">boolean</td>
        <td>display help for command <code>npm dependency</code></td>
        </tr>
  </table>      

  <p><b>examples:</b></p>
  <br />

  <p>
    Update a developer dependency <code>@babel/core</code> to version <code>^7.12.13</code>
    for all projects in the global list of projects

  ```bash
  > batchrun npm dependency --dev --pkg @babel/core --version "^7.12.13"
  ```
  </p>
  <p>
    Update a developer dependency <code>@babel/core</code> to version <code>^7.12.13</code>
    for all projects in the global list of projects, starting at index 7 and including all
    projects up to index 12 inclusive. (The first index, that could be addressed was '0')

  ```bash
  > batchrun npm dependency --dev --pkg @babel/core --version "^7.12.13" --args:from 7 --args:to 12
  ```
  </p>
  <p>
    Update a developer dependency <code>@babel/core</code> to version <code>^7.12.13</code>
    for a project located at <code>~/projects/my project</code>

  ```bash
  > batchrun npm dependency --dev --pkg @babel/core --version "^7.12.13" "~/projects/my project"
  ```
  </p>
</blockquote>
