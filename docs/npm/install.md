
### install ###
<blockquote>
  <p>Run an <code>npm install</code> for one or more projects.</p>

  <table border=0 width=100%>
    <tr><th colspan="3"><b>format</b></th></tr>
    <tr><th colspan="3">&gt; batchrun npm install &lt;options&gt; [directories]</th></tr>
    <tr><th colspan="3"><b>options</b></th></tr>
    <tr><td>--cleancache</td>
        <td style="text-align:center">boolean</td>
        <td>clean cache before install</td>
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
        <td>display help for command <code>npm install</code></td>
        </tr>
  </table>      

  <p><b>examples:</b></p>
  <br />

  <p>
    Run an npm install for all projects in the global list of projects

  ```bash
  > batchrun npm install
  ```
  </p>
  <p>
    Clean cache and run an npm install for all projects in the global list of
    projects, starting at index 7 and including all projects up to index 12
    inclusive. (The first index, that could be addressed was '0')

  ```bash
  > batchrun npm install --cleancache --args:from 7 --args:to 12
  ```
  </p>
  <p>
    Run an npm install for a project located at <code>~/projects/my project</code>

  ```bash
  > batchrun npm install "~/projects/my project"
  ```
  </p>
</blockquote>
