export default {

    data() {
        return {
            x:0,
            y:0,
            r:0
        }
    },
    methods:{
        calcHandler(e){

            // this.r = parseInt(this.x) + parseInt(this.y);
            this.r = this.x + this.y;
            console.log(this.r);
            // e.preventDefault();
        }
    },
    template:`
        <section>
    
        <h1>Vue 덧셈 계산기</h1>
        <form>
            <fieldset>
                <legend>계산기 입력폼</legend>
                <div>
                    <label>x:</label> <!--bind : 1way , model: 2way(form 안의 사용자 입력값만) -->
                    <input dir="rtl" name="x" v-bind:value="x" v-model.number.trim="x">
                    <label>y:</label>
                    <input dir="rtl" name="y" :value="y" v-model.number.trim="y">
                    <span>=</span>
                    <span>{{r}}</span>
    <!--                <span v-text="x+y"></span>-->
                </div>
                <hr>
                <div>
                    <input type="submit" name="cmd" value="초기화">
                    <input type="submit" name="cmd" value="계산하기" @click.prevent="calcHandler">
                </div>
            </fieldset>
        </form>
    </section>`

}