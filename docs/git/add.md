
### add ###
<blockquote>
  <p>Git add one or more files or all changes in one or more project directories.</p>

  <table border=0 width=100%>
    <tr><th colspan="3"><b>format</b></th></tr>
    <tr><th colspan="3">&gt; batchrun git add &lt;options&gt; [directories]</th></tr>
    <tr><th colspan="3"><b>mandatory option (one or the other)</b></th></tr>
    <tr><td>--all</td>
        <td style="text-align:center">boolean</td>
        <td>equals git add -A</td>
        </tr>
    <tr><td>--file</td>
        <td style="text-align:center">string</td>
        <td>filepath relative to project directory<br/>
            this option may be added multiple times.</td>
        </tr>
    <tr><th colspan="3"><b>additional options</b></th></tr>
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
        <td>projectlist index (overrides ranges set by --args:from and --args:to)</td>
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
    Add [ "somefile.js", "otherfile.js" ] to git staging in all projects

  ```bash
  > batchrun git add --file somefile.js --file otherfile.js
  ```
  </p>
  <p>
    Add package.json to gits staging in all projects of the global list of projects,
    starting at index 7 and including all projects up to index 12 inclusive. (The
    first index, that could be addressed was '0')

  ```bash
  > batchrun git add --file package.json --args:from 7 --args:to 12
  ```
  </p>
</blockquote>
