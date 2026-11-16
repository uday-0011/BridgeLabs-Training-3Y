// Q6: Filter student rows in real time, without case sensitivity.

const searchInput = document.getElementById("searchInput");
const studentTableBody = document.getElementById("studentTableBody");
const noResultsMessage = document.getElementById("noResults");

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.trim().toLowerCase();
    const studentRows = studentTableBody.querySelectorAll("tr");
    let visibleRows = 0;

    for (let i = 0; i < studentRows.length; i++) {
        const rowText = studentRows[i].textContent.toLowerCase();
        const matchesSearch = rowText.includes(searchText);

        studentRows[i].hidden = !matchesSearch;
        if (matchesSearch) visibleRows++;
    }

    noResultsMessage.hidden = visibleRows !== 0;
});
