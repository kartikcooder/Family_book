var images=["Dad.jpg",
"Mom.jpg",
"Big brother.jpg",
"Big sister.jpg",
"Grandma.jpg",
"Grandpa.jpg"];

var names=["Family Book",
"Chintamani Ghawalkar","Apurva Ghawalkar","Ameya Naik",
"Akansha Naik", "Grandma Ghawalkar", "Ramakant Ghawalkar"
];

var i = 0;

function update()
{
    i++;
    var no_of_family = 5
    if(i > no_of_family)
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];

    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}