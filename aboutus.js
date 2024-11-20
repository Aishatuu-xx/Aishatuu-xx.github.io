document.addEventListener("DOMContentLoaded", function() {
    const valueItems = document.querySelectorAll('.value-item');
    const teamMembers = document.querySelectorAll('.team-member');

    valueItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        }, index * 300);
    });

    teamMembers.forEach((member, index) => {
        setTimeout(() => {
            member.style.opacity = 1;
        }, index * 300);
    });
});
