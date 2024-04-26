class community {
    constructor(name, role, availability) {
        this.name = name;
        this.role = role;
        this.availability = availability;
    }
}
const member1 = new community("Pawan", "Admin", "Availabe");
const member2 = new community("Mohit", "Staff", "Not Availabe");
const member3 = new community("Sayar", "Manager", "Availabe");
const member4 = new community("Aman", "Counsler", "Not Availabe");
console.log
(
    member1.name + "--" + member1.role + "--" + member1.availability + "\n" +
    member2.name + "--" + member2.role + "--" + member2.availability + "\n" +
    member3.name + "--" + member3.role + "--" + member3.availability + "\n" +
    member4.name + "--" + member4.role + "--" + member4.availability + "\n"
)