class Newlinks {



    constructor(ux) {

        this.head = {
            value: ux,
            next: null
        }

        this.tail = this.head;
    }


    pussh(ux) {

        const newNodes = {

            value: ux,
            next: null

        }

        this.tail.next = newNodes;

        this.tail = newNodes;

    }


    unio(ux) {

        const newNodes = {
            value: ux,
            next: null

        }


        newNodes.next = this.head

        this.head = newNodes

    }

    traverse(req) {


        let counter = 0;
        let currentNode = this.head;

        while (counter != req) {

            counter++;

            currentNode = currentNode.next;
        }

        return currentNode;

    }

    innset(index, ux) {

        const newNodes = {

            value: ux,

            next: null

        }

        const leaderNode = this.traverse(index - 1);

        const nextNode = leaderNode.next;
        leaderNode.next = newNodes;

        newNodes.next = nextNode;


    }


    delete(index) {


        const leaderNode = this.traverse(index - 1);

        const unwantNode = leaderNode.next;


        const nextNode = unwantNode.next

        leaderNode.next = nextNode;



    }

    reverses() {



        let first = this.head;
        this.tail = this.head;
        let second = first.next;

        while (second) {

            let temp = second.next;
            second.next = first;
            first = second;

            second = temp
        }
        this.head.next = null;
        this.head = first;
    }


}


const nelink = new Newlinks(50);

nelink.pussh(75)
nelink.unio(25)
nelink.unio(100)
nelink.innset(1, 10)
nelink.delete(1)
nelink.reverses()
console.log(nelink)