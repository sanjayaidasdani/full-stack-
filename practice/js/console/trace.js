function a() {
    b()
}
function b() {
    c()
}
function c() {
    console.trace()
}
a()