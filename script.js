/**
 * Returns the index of the first occurrence of subStr in str, case-insensitively.
 *
 * @param {string} str - The target string.
 * @param {string} subStr - The substring to look for.
 * @returns {number} The 0-based start index, or -1 if not found.
 */
function indexOfIgnoreCase(str, subStr) {
  if (typeof str !== 'string' || typeof subStr !== 'string') {
    return -1;
  }
  return str.toLowerCase().indexOf(subStr.toLowerCase());
}

// UI binding
const strInput = document.getElementById('strInput');
const subStrInput = document.getElementById('subStrInput');
const findBtn = document.getElementById('findBtn');
const resultBox = document.getElementById('result');

function handleSearch() {
  const str = strInput.value;
  const subStr = subStrInput.value;
  const index = indexOfIgnoreCase(str, subStr);

  resultBox.textContent = index;
}

findBtn.addEventListener('click', handleSearch);

// Run on page load
handleSearch();