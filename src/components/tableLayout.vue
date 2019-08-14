<template>
    <div>
        <div :class="[queryAlign?'align-' + queryAlign : '']">
            <slot name="query" ></slot>
        </div>
        <div>
            <slot name="btn"></slot>
        </div>
        <div>
            <slot name="table"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        queryAlign:{
            type:String,
            default:'',
            validator: function (value) {
                return ['right', 'left', 'center','between',''].indexOf(value) !== -1
            }
        }
    }

}
</script>

<style lang="scss" scoped>
    $align-type-right:flex-end;
    $align-type-left:flex-start;
    $align-type-center:center;
    $align-type-between:space-between;

    .align-right{
        display: flex;
        justify-content: $align-type-right;
    }

    .align-left{
        display: flex;
        justify-content: $align-type-left;
    }

    .align-center{
        display: flex;
        justify-content: $align-type-center;
    }

    .align-between{
        display: flex;
        justify-content: $align-type-between;
    }



</style>
