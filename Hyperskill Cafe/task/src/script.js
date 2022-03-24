
document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let title = document.getElementById("reviewTitle").value;
    let comment = document.getElementById("reviewText").value;
    let person = document.getElementById("reviewName").value;
    if (person === "") {
        person = "Anonymous";
    }

    let row = document.getElementById('reviewsRow');
    let newReview = document.createElement("div");
    newReview.className = "col-lg-4 col-md-6 py-3";
    newReview.innerHTML = '<div class="card h-100" style="width: 18rem;">' +
                                '<div class="card-body">' +
                                    '<h4 class="card-title">' + title + '</h4>' +
                                    '<blockquote class="blockquote mb-0">' +
                                        '<p>' + comment + '</p>' +
                                        '<footer class="text-end blockquote-footer font-italic"><i>' + person + '</i></footer>' +
                                    '</blockquote>' +
                                '</div>' +
                            '</div>';
    row.appendChild(newReview);
});