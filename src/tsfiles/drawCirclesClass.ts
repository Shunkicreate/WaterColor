export default class drawCircles {
    x: number[] = new Array();
    y: number[] = new Array();
    r: number[] = new Array();
    h: number[] = new Array();
    s: number[] = new Array();
    b: number[] = new Array();
    a: number[] = new Array();
    constructor(x: number, y: number, r: number, h: number, s: number, b: number, a: number) {
        this.x.push(x);
        this.y.push(y);
        this.r.push(r);
        this.h.push(h);
        this.s.push(s);
        this.b.push(b);
        this.a.push(a);
    }
}

