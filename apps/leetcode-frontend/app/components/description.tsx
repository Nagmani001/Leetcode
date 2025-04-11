export default function Description() {
  return <div className="flex w-full flex-1 flex-col gap-4 overflow-y-auto px-4 py-5">
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-start gap-2">
        <div className="text-title-large font-semibold text-text-primary dark:text-text-primary"><a className="no-underline hover:text-blue-s dark:hover:text-dark-blue-s truncate cursor-text whitespace-normal hover:!text-[inherit]" href="/problems/two-sum/">1. Two Sum</a>
          <div className="text-body ml-2 inline-flex items-center gap-2 py-1">
            <div className="inline-flex items-center space-x-2"></div>
          </div>
        </div>
      </div>
      <div className="text-body flex flex-none items-center gap-1 py-1.5 text-text-secondary dark:text-text-secondary">Solved<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="1em" height="1em" fill="currentColor" className="fill-none stroke-current text-message-success dark:text-message-success"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M12.598 7a5.6 5.6 0 11-3.15-5.037m2.1 1.537l-4.9 4.9-1.4-1.4"></path></svg></div>
    </div><div className="flex gap-1"><div className="relative inline-flex items-center justify-center text-caption px-2 py-1 gap-1 rounded-full bg-fill-secondary text-difficulty-easy dark:text-difficulty-easy">Easy</div>
      <div className="relative inline-flex items-center justify-center text-caption px-2 py-1 gap-1 rounded-full bg-fill-secondary cursor-pointer transition-colors hover:bg-fill-primary hover:text-text-primary text-sd-secondary-foreground hover:opacity-80">
        <div className="relative text-[14px] leading-[normal] p-[1px] before:block before:h-3.5 before:w-3.5 h-3.5 w-3.5 fill-none stroke-current"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="tag" className="svg-inline--fa fa-tag absolute left-1/2 top-1/2 h-[1em] -translate-x-1/2 -translate-y-1/2 align-[-0.125em]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M197.5 32c17 0 33.3 6.7 45.3 18.7l176 176c25 25 25 65.5 0 90.5L285.3 450.7c-25 25-65.5 25-90.5 0l-176-176C6.7 262.7 0 246.5 0 229.5V80C0 53.5 21.5 32 48 32H197.5zM48 229.5c0 4.2 1.7 8.3 4.7 11.3l176 176c6.2 6.2 16.4 6.2 22.6 0L384.8 283.3c6.2-6.2 6.2-16.4 0-22.6l-176-176c-3-3-7.1-4.7-11.3-4.7H48V229.5zM112 112a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg></div>Topics</div>
      <div className="relative inline-flex items-center justify-center text-caption px-2 py-1 gap-1 rounded-full bg-fill-secondary cursor-pointer transition-colors hover:bg-fill-primary hover:text-text-primary text-sd-secondary-foreground hover:opacity-80"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="h-3.5 w-3.5"><path fill-rule="evenodd" d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z" clip-rule="evenodd"></path></svg>Companies</div>
      <div className="relative inline-flex items-center justify-center text-caption px-2 py-1 gap-1 rounded-full bg-fill-secondary cursor-pointer transition-colors hover:bg-fill-primary hover:text-text-primary text-sd-secondary-foreground hover:opacity-80">
        <div className="relative text-[14px] leading-[normal] p-[1px] before:block before:h-3.5 before:w-3.5 h-3.5 w-3.5 fill-none stroke-current"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="lightbulb" className="svg-inline--fa fa-lightbulb absolute left-1/2 top-1/2 h-[1em] -translate-x-1/2 -translate-y-1/2 align-[-0.125em]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7l0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5H109c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8l0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4l0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5H226.4c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8l0 0 0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80V416H272v16c0 44.2-35.8 80-80 80z"></path></svg></div>Hint</div>
    </div><div><div className="elfjS" data-track-load="description_content"><p>Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>

      <p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>

      <p>You can return the answer in any order.</p>

      <p>&nbsp;</p>
      <p><strong className="example">Example 1:</strong></p>

      <pre><strong>Input:</strong> nums = [2,7,11,15], target = 9
        <strong>Output:</strong> [0,1]
        <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
      </pre>

      <p><strong className="example">Example 2:</strong></p>

      <pre><strong>Input:</strong> nums = [3,2,4], target = 6
        <strong>Output:</strong> [1,2]
      </pre>

      <p><strong className="example">Example 3:</strong></p>

      <pre><strong>Input:</strong> nums = [3,3], target = 6
        <strong>Output:</strong> [0,1]
      </pre>

      <p>&nbsp;</p>
      <p><strong>Constraints:</strong></p>

      <ul>
        <li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
        <li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
        <li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>
        <li><strong>Only one valid answer exists.</strong></li>
      </ul>
    </div>
    </div>
  </div>
}
