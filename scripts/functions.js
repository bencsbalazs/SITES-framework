class Framework {
    dataSource;
    currentState;

    constructor() {
        this.dataSource = this.readData();
        this.currentState = this.readState();
    }

    readData = () => {
        return {
            id: "identifier",
            title: "Title of the content",
            rows: [
                {
                    elements: [
                        {
                            type: "card"
                        }
                    ]
                },
                {
                    elements: []
                },
                {
                    elements: []
                }
            ]
        }

    };

    readState = () => {

    };

    saveStateToLocal = () => {
        // TODO
    };

    saveStateToServer = () => {
        // TODO
    }

}

class Page extends Framework {

    constructor() {
        super();

    }

    buildPage = () => {
        $(super.dataSource.rows).each(()=>{

        });
    }

}

$(() => {
    const page = new Page();
});