// เป็นการกำหนด type เริ่มต้นทำงานร่วมกับ generic
class StackDefault<T = string> {
    private items: T[] = []
    pushElement(element: T) {
        this.items.push(element)
    }
}

const stackDefault = new StackDefault()
stackDefault.pushElement("top")
stackDefault.pushElement("kate")
// stackDefault.pushElement(333) *error เพราะ default type class เป็น string

console.log('Generic Class Default Type =>', stackDefault);