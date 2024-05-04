(function (Scratch) {
    "use strict";
    
    // V1.0.2

    Scratch.translate.setup({
        "zh": {
            "control.extName": "控制",
            "control.repeatForSeconds": "重复执行 [TIME] 秒",
            "control.for_each_2": "对于 [VALUE1] 到 [VALUE2] 中的每一个 [VARIABLE] 重复",
            "control.for_in_string": "对于字符串 [STRING] 中的每一个 [VARIABLE] 重复",
            "control.helloWorld": "你好世界！",
            "control.foreverIf": "重复执行如果 [BOOL] 那么",
            "control.else": "否则",
            "control.doOnce": "执行一次",
            "control.thenLoopIf": "如果 [BOOL] 则重复",
            "control.if": "如果 [BOOL1] 那么",
            "control.elseIf": "否则如果 [BOOL2] 那么",
            "control.wait": "等待 [DURATION] [UNITS]",
            "control.stopSprite": "停止角色 [SPRITE]",
            "control.greenFlag": "重启项目",
            "control.switchCase": "执行分支: [INPUT]",
            "control.switchCaseCase": "分支条件: [INPUT]",
            "control.branch": "分支",
            "control.switchCaseDefault": "默认选项：",
            "control.seconds": "秒",
            "control.milliseconds": "毫秒",
            "control.microseconds": "微秒",
            "control.minutes": "分钟",
            "control.hours": "小时",
            "control.frames": "帧",
            "control.set_counter_step_size": "将计数器步长设为 [NUM]",
            "control.change_counter": "计数器 [MODE]",
            "control.clear": "归零",
            "control.increment": "增加",
            "control.reduction": "减少",
            "control.newThread": "新线程",
            "control.breakLoop": "退出重复 [ICON]"
        },
        "zh-tw": {
            "control.extName": "控制",
            "control.repeatForSeconds": "重複 [TIME] 秒",
            "control.for_each_2": "計數 [VARIABLE] 於 [VALUE1] 到 [VALUE2]",
            "control.for_in_string": "使用 [VARIABLE] 在字串 [STRING] 中重複",
            "control.helloWorld": "Hello world！",
            "control.foreverIf": "無限重複如果 [BOOL] 那麽",
            "control.else": "否則",
            "control.doOnce": "執行一次",
            "control.thenLoopIf": "如果 [BOOL] 條件滿足就重複",
            "control.if": "如果 [BOOL1] 那麽",
            "control.elseIf": "否則如果 [BOOL2] 那麽",
            "control.wait": "等待 [DURATION] [UNITS]",
            "control.stopSprite": "停止 [SPRITE]",
            "control.greenFlag": "重新開始",
            "control.switchCase": "選擇分支: [INPUT]",
            "control.switchCaseCase": "分支: [INPUT]",
            "control.branch": "分支",
            "control.switchCaseDefault": "預設：",
            "control.seconds": "秒",
            "control.milliseconds": "毫秒",
            "control.microseconds": "微秒",
            "control.minutes": "分鐘",
            "control.hours": "小時",
            "control.frames": "影格",
            "control.set_counter_step_size": "將計數器間距設為 [NUM]",
            "control.change_counter": "計數器 [MODE]",
            "control.clear": "重置",
            "control.increment": "累計",
            "control.reduction": "減少",
            "control.newThread": "新執行緒",
            "control.breakLoop": "退出重複 [ICON]"
        },
        "ja-Hira": {
            "control.extName": "せいぎょ",
            "control.repeatForSeconds": "[TIME] びょうかんくりかえす",
            "control.for_each_2": "[VALUE1] から [VALUE2] までのようそを [VARIABLE] にいれてくりかえす",
            "control.for_in_string": "[STRING] のテキストようそを [VARIABLE] にいれてくりかえす",
            "control.helloWorld": "ハローワールド！",
            "control.foreverIf": "もし [BOOL] なら、ずっと",
            "control.else": "でなければ",
            "control.doOnce": "さいしょに",
            "control.thenLoopIf": "をおこない、 [BOOL] ならくりかえす",
            "control.if": "もし [BOOL1] なら",
            "control.elseIf": "でなければ、もし [BOOL2] なら",
            "control.wait": "[DURATION] [UNITS] まつ",
            "control.stopSprite": "[SPRITE] をとめる",
            "control.greenFlag": "リスタート",
            "control.switchCase": "[INPUT] でじょうけんぶんき：",
            "control.switchCaseCase": "[INPUT] ならば：",
            "control.branch": "ぶんき",
            "control.switchCaseDefault": "ちがえば：",
            "control.seconds": "びょう",
            "control.milliseconds": "ミリびょう",
            "control.microseconds": "マイクロびょう",
            "control.minutes": "ふん（ぷん）",
            "control.hours": "じかん",
            "control.frames": "フレーム",
            "control.set_counter_step_size": "カウンターのステップサイズを [NUM] にする",
            "control.change_counter": "カウンターを [MODE]",
            "control.clear": "クリアする",
            "control.increment": "ぞうかさせる",
            "control.reduction": "げんしょうさせる",
            "control.newThread": "あたらしいすれっどをさくせいする",
            "control.breakLoop": "だっしゅつする [ICON]"
        },
        "ja": {
            "control.extName": "制御",
            "control.repeatForSeconds": "[TIME] 秒間くり返す",
            "control.for_each_2": "[VALUE1] から [VALUE2] までの要素を [VARIABLE] に入れて繰り返す",
            "control.for_in_string": "[STRING] のテキスト要素を [VARIABLE] に入れて繰り返す",
            "control.helloWorld": "ハローワールド！",
            "control.foreverIf": "もし [BOOL] なら、ずっと",
            "control.else": "でなければ",
            "control.doOnce": "最初に",
            "control.thenLoopIf": "を行い、 [BOOL] なら繰り返す",
            "control.if": "もし [BOOL1] なら",
            "control.elseIf": "でなければ、もし [BOOL2] なら",
            "control.wait": "[DURATION] [UNITS] 待つ",
            "control.stopSprite": "[SPRITE] を止める",
            "control.greenFlag": "リスタート",
            "control.switchCase": "[INPUT] で条件分岐：",
            "control.switchCaseCase": "[INPUT] ならば：",
            "control.branch": "分岐",
            "control.switchCaseDefault": "違えば：",
            "control.seconds": "秒",
            "control.milliseconds": "ミリ秒",
            "control.microseconds": "マイクロ秒",
            "control.minutes": "分",
            "control.hours": "時間",
            "control.frames": "フレーム",
            "control.set_counter_step_size": "カウンターのステップサイズを [NUM] にする",
            "control.change_counter": "カウンターを [MODE]",
            "control.clear": "クリアする",
            "control.increment": "増加させる",
            "control.reduction": "減少させる",
            "control.newThread": "新しいスレッドを作成する",
            "control.breakLoop": "脱出する [ICON]"
        }
    });
    const formatMessage = Scratch.translate;
    const lang = (id, defaultValue) => Scratch.translate({ id: id, default: defaultValue });

    const repeatIcon = '/static/blocks-media/default/repeat.svg';
    const breakIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgdmVyc2lvbj0iMS4xIgogICB3aWR0aD0iMjcuNDY4IgogICBoZWlnaHQ9IjEyLjg5OCIKICAgdmlld0JveD0iMCAwIDI3LjQ2OCAxMi44OTc5OTkiCiAgIGlkPSJzdmcxMiIKICAgc29kaXBvZGk6ZG9jbmFtZT0iYnJlYWsuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjIgKGRjMmFlZGFmMDMsIDIwMjItMDUtMTUpIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMxNiIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9Im5hbWVkdmlldzE0IgogICAgIHBhZ2Vjb2xvcj0iIzhhOGQ4YiIKICAgICBib3JkZXJjb2xvcj0iIzAwMDAwMCIKICAgICBib3JkZXJvcGFjaXR5PSIwLjI1IgogICAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSIyMi42Mjc0MTciCiAgICAgaW5rc2NhcGU6Y3g9IjEzLjQ3OTIyMyIKICAgICBpbmtzY2FwZTpjeT0iMTAuODQ5NjciCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzEyIiAvPgogIDxwYXRoCiAgICAgc3R5bGU9ImNvbG9yOiMwMDAwMDA7b3BhY2l0eTowLjI7ZmlsbDojMDAwMDAwO3N0cm9rZS13aWR0aDowO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIKICAgICBkPSJNIDE3LjEzNjcxOSwwLjA4OTg0Mzc1IEMgMTYuNjk5MzY0LC0wLjA1MTUwMTE3IDE2LjEwNTM2MywtMC4wMzY0ODUwMSAxNS42NDA2MjUsMC4yMTg3NSAxNC43MTExNDksMC43MjkyMjAwMiAxNC41NTQ2ODgsMS42MjE0OTI0IDE0LjU1NDY4OCwyLjM2MzI4MTMgdiAzLjc1MzkwNjIgbCAtNy43ODMyMDM2LDAuMDA1ODYgQyA2Ljc3MTA5NjEsNS4xOTkwNDI3IDYuNDkyMTE3OSw0LjI3NDAyNDggNS44NzEwOTM3LDMuNTM5MDYyNSA1LjI0OTYzNTQsMi44MDM1ODYzIDQuMjQ5OTQyNywyLjMyMDMxMjUgMy4xNjk5MjE5LDIuMzIwMzEyNSBIIDAgViAzLjcyMDcwMzEgOS4wNDI5Njg4IEMgMCwxMC4wNTk3NDggMC4yOTM0NzU3MSwxMS4wNjQ1NTYgMC45OTAyMzQzOCwxMS44MDI3MzQgMS42ODY5OTMsMTIuNTQwOTEyIDIuNzE0MDgyOSwxMi44OTg0MzggMy43NjM2NzE5LDEyLjg5ODQzOCBIIDI1LjE2NjAxNiBjIDAuNDA0OTM2LDAgMC44MDU2NiwtMC4wNDgyNSAxLjIyNjU2MiwtMC4yNTU4NiAwLjQyMDkwMiwtMC4yMDc2MDYgMC44NTg3MjcsLTAuNjYzNTI2IDEsLTEuMTk5MjE5IDAuMjgyNTQ2LC0xLjA3MTM4NSAtMC4yNzkwMzQsLTEuNzY1MzYxNyAtMC44MDg1OTQsLTIuMjk0OTIxNSB2IC0wLjAwMTk1IEwgMTguMTc3NzM0LDAuNzU1ODU5MzcgQyAxNy44OTY3MjIsMC40NzU0NDEzMSAxNy41NzQwNzMsMC4yMzExODg2NyAxNy4xMzY3MTksMC4wODk4NDM3NSBaIgogICAgIGlkPSJwYXRoMTAxMCIKICAgICBzb2RpcG9kaTpub2RldHlwZXM9InNzc2Njc3NjY3Nzc3Nzc2NjY3MiIC8+CiAgPHBhdGgKICAgICBkPSJtIDEuNCwzLjcyMDE3NTIgaCAxLjc3MDAwMDIgYyAxLjQxNzY5LDAgMi4yMDEsMS4xMjc2MDEgMi4yMDEsMi40MDQyMzUgbCAtMy42NWUtNCwxLjM5ODg3NSAxMC41ODM4MDI4LC0wLjAwNzMgMS4wMmUtNCwtNS4xNTI3NDkgYyAwLC0wLjk0MDcgMC41NDcxNjQsLTEuMzAxOTk0IDEuMjMzNzk3LC0wLjYxNjgxMyBsIDguNDA1MjI0LDguMzkxMjM3OCBDIDI2LjMwOTkyLDEwLjg1NDAyIDI2LjIwOTY2LDExLjQ5Nzg2IDI1LjE2NTMxNSwxMS40OTc4NiBMIDMuNzY0MDAwMiwxMS40OTg2NCBDIDIuMjMxODExMiwxMS40OTg2NCAxLjQsMTAuNTY3ODUgMS40LDkuMDQzNjQxMiBaIgogICAgIHN0eWxlPSJjb2xvcjojMDAwMDAwO2Rpc3BsYXk6aW5saW5lO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICBpZD0icGF0aDg5Mi0zIgogICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY3NjY2NjY2NjY3NjIiAvPgo8L3N2Zz4KPCEtLXJvdGF0aW9uQ2VudGVyOjEzLjM5MzYxMzEyNDk5OTk3Mzo4LjczMTcyMDc0MzY2MTE1Ny0tPgo=';
    const newThreadIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcKICAgdmVyc2lvbj0iMS4xIgogICBpZD0icmVwZWF0IgogICB4PSIwcHgiCiAgIHk9IjBweCIKICAgdmlld0JveD0iMCAwIDI0IDI0IgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIHNvZGlwb2RpOmRvY25hbWU9Im5ld190aHJlYWQuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjMuMSAoOTFiNjZiMDc4MywgMjAyMy0xMS0xNikiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPjxkZWZzCiAgIGlkPSJkZWZzMTMiIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBpZD0ibmFtZWR2aWV3MTEiCiAgIHBhZ2Vjb2xvcj0iI2EyYTJhMiIKICAgYm9yZGVyY29sb3I9IiMwMDAwMDAiCiAgIGJvcmRlcm9wYWNpdHk9IjAuMjUiCiAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIgogICBpbmtzY2FwZTpkZXNrY29sb3I9IiM4ZjhmOGYiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMzIiCiAgIGlua3NjYXBlOmN4PSIxMi43MDMxMjUiCiAgIGlua3NjYXBlOmN5PSIxNC43MDMxMjUiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAyNyIKICAgaW5rc2NhcGU6d2luZG93LXg9IjE5MTIiCiAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXI0LTEiIC8+CjxzdHlsZQogICB0eXBlPSJ0ZXh0L2NzcyIKICAgaWQ9InN0eWxlMiI+Cgkuc3Qwe2ZpbGw6I0NGOEIxNzt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+Cjx0aXRsZQogICBpZD0idGl0bGU0Ij5yZXBlYXQ8L3RpdGxlPgoKCjxtZXRhZGF0YQogICBpZD0ibWV0YWRhdGExIj48cmRmOlJERj48Y2M6V29yawogICAgICAgcmRmOmFib3V0PSIiPjxkYzp0aXRsZT5yZXBlYXQ8L2RjOnRpdGxlPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZwogICBpZD0ibGF5ZXI0LTEiCiAgIGlua3NjYXBlOmxhYmVsPSJMYXllciIKICAgdHJhbnNmb3JtPSJtYXRyaXgoMC45MTM0NTkzOSwwLDAsMC45MTM0NTkzOSw2LjczMjA1NjIsMC44MzU5ODA5OCkiCiAgIHN0eWxlPSJkaXNwbGF5OmlubGluZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS13aWR0aDoxLjk3MDUzMDk1O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtvcGFjaXR5OjAuMiI+PHBhdGgKICAgICBjbGFzcz0ic3QxIgogICAgIGQ9Ik0gMTIuNzY4Mjk5LDEwLjUyNDc5MyAxMC4zNjYyMTMsOS41Mjk4MTc2IGMgMCwwIC0yLjY3Njc2MjYsLTEuMjAyNTYyMiAtMy42NTcyNDg2LC0xLjYyMzEyMiBDIDUuNzI4NDc3NCw3LjQ4NjEzNjcgNC40OTE2NTM0LDYuOTg4MjU1NyA0LjQ5MTY1MzQsNi45ODgyNTU3IDQuMTIyMTAwNCw2LjgzNTE4MjMgMy45NTk3NDI0LDYuNDQzMjEzMSA0LjExMjgxNTQsNi4wNzM2NjEzIDQuMTg5MzU1NCw1Ljg4ODg4NTQgNC4zMjAwMDg0LDUuODM0NzY2IDQuNDUwNjY1NCw1Ljc4MDY0NjQgTCAxMC4xOTk1NDIsMy4zOTkzODM2IGMgMC4zOTE5NjksLTAuMTYyMzU4OSAwLjc2MTUyMSwtMC4wMDkyOSAwLjgzMTQ5MiwwLjM0NDQxNDkgbCAyLjM4MTI2Miw1Ljc0ODg3NzcgYyAwLjE2MjM1OSwwLjM5MTk2NzkgMC4xMzk5NDIsMC43MDczOTg4IC0wLjA2NzI1LDAuOTQ2Mjk1OCAtMC4yMDcxOTMsMC4yMzg4OTUgLTAuMzkxOTY5LDAuMTYyMzU4IC0wLjU3Njc0NiwwLjA4NTgyIHoiCiAgICAgaWQ9InBhdGg4LTMtMiIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjk3MDUzMDk1O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0ic2Njc3Nzc2Nzc3MiIC8+PHBhdGgKICAgICBjbGFzcz0ic3QxIgogICAgIGQ9Im0gMTAuNjcwNDUyLDIwLjEzIHYgLTIuNiBjIDAsMCAwLjA4NjY3LC0yLjkzMzIwOCAwLjEsLTQgMC4wMTMzMywtMS4wNjY3OTIgMCwtMi40IDAsLTIuNCAwLC0wLjQgMC4zLC0wLjcgMC43LC0wLjcgMC4yLDAgMC4zLDAuMSAwLjQsMC4yIGwgNC40LDQuNCBjIDAuMywwLjMgMC4zLDAuNyAwLDAuOSBsIC00LjQsNC40IGMgLTAuMywwLjMgLTAuNiwwLjQgLTAuOSwwLjMgLTAuMywtMC4xIC0wLjMsLTAuMyAtMC4zLC0wLjUgeiIKICAgICBpZD0icGF0aDgtOS01LTEiCiAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS45NzA1MzA5NTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICBzb2RpcG9kaTpub2RldHlwZXM9InNjY3Nzc3Njc3NzIiAvPjxwYXRoCiAgICAgaWQ9InJlY3QxLTEtMyIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjk3MDUzO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgIGQ9Im0gLTMuOTYzOTMxOCwxNC4zNDM2NDUgYyAwLDAgMTYuMzgyNjQwOCwtMC40NjExODggMTYuNzM2MTk0OCwtMC43OTI2NDUgdiAzLjkzOCBDIDEyLjQ4NSwxNy4yMjM4MzQgLTMuOTYzOTMxOCwxNi42OTcyMjcgLTMuOTYzOTMxOCwxNi42OTcyMjcgYyAtMC42ODYzMDI2LDAuMDA0MyAtMS4xOTI2NzU2LC0wLjU1ODAxIC0xLjE4OTA0ODgsLTEuMTkzMDA0IDAuMDAzMzcsLTAuNTkwNjE4IDAuNDc5ODk3MywtMS4xNDgzMTkgMS4xODkwNDg4LC0xLjE2MDU3OCB6IgogICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY3NjIgogICAgIGlua3NjYXBlOmxhYmVsPSJyZWN0MS0xIiAvPjxwYXRoCiAgICAgaWQ9InJlY3QxLTItNC02IgogICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuOTcwNTMwOTU7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtZGFzaGFycmF5Om5vbmUiCiAgICAgZD0iTSAwLjg0MTg3NSwxNC4yMTkwNCBDIDIuNTk5OTMxOSwxNC4xNjYxNSA4LjQwODAxODQsNy41ODgzNTc2IDcuMzcyMzM5NCw2LjIwMjI3ODEgTCAxMC4yMDA3NjQsOS4wMzA3MDUgYyAtMC4xNzYyNDgsMS4xNTc3NyAtNS41MjI2OTU2LDcuMzc2MjgxIC02LjA1MzM5NDYsNi4wMDU2ODcgeiIKICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjIiAvPjwvZz48ZwogICBpZD0ibGF5ZXI0IgogICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIiCiAgIHRyYW5zZm9ybT0ibWF0cml4KDAuOTEzNDU5MzksMCwwLDAuOTEzNDU5MzksNi43MzE3OTE0LDAuODM1NTc4MDgpIgogICBzdHlsZT0iZGlzcGxheTppbmxpbmUiPjxwYXRoCiAgICAgY2xhc3M9InN0MSIKICAgICBkPSJNIDEyLjc2ODI5OSwxMC41MjQ3OTMgMTAuMzY2MjEzLDkuNTI5ODE3NiBjIDAsMCAtMi42NzY3NjI2LC0xLjIwMjU2MjIgLTMuNjU3MjQ4NiwtMS42MjMxMjIgQyA1LjcyODQ3NzQsNy40ODYxMzY3IDQuNDkxNjUzNCw2Ljk4ODI1NTcgNC40OTE2NTM0LDYuOTg4MjU1NyA0LjEyMjEwMDQsNi44MzUxODIzIDMuOTU5NzQyNCw2LjQ0MzIxMzEgNC4xMTI4MTU0LDYuMDczNjYxMyA0LjE4OTM1NTQsNS44ODg4ODU0IDQuMzIwMDA4NCw1LjgzNDc2NiA0LjQ1MDY2NTQsNS43ODA2NDY0IEwgMTAuMTk5NTQyLDMuMzk5MzgzNiBjIDAuMzkxOTY5LC0wLjE2MjM1ODkgMC43NjE1MjEsLTAuMDA5MjkgMC44MzE0OTIsMC4zNDQ0MTQ5IGwgMi4zODEyNjIsNS43NDg4Nzc3IGMgMC4xNjIzNTksMC4zOTE5Njc5IDAuMTM5OTQyLDAuNzA3Mzk4OCAtMC4wNjcyNSwwLjk0NjI5NTggLTAuMjA3MTkzLDAuMjM4ODk1IC0wLjM5MTk2OSwwLjE2MjM1OCAtMC41NzY3NDYsMC4wODU4MiB6IgogICAgIGlkPSJwYXRoOC0zIgogICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJzY2Nzc3NzY3NzcyIgLz48cGF0aAogICAgIGNsYXNzPSJzdDEiCiAgICAgZD0ibSAxMC42NzA0NTIsMjAuMTMgdiAtMi42IGMgMCwwIDAuMDg2NjcsLTIuOTMzMjA4IDAuMSwtNCAwLjAxMzMzLC0xLjA2Njc5MiAwLC0yLjQgMCwtMi40IDAsLTAuNCAwLjMsLTAuNyAwLjcsLTAuNyAwLjIsMCAwLjMsMC4xIDAuNCwwLjIgbCA0LjQsNC40IGMgMC4zLDAuMyAwLjMsMC43IDAsMC45IGwgLTQuNCw0LjQgYyAtMC4zLDAuMyAtMC42LDAuNCAtMC45LDAuMyAtMC4zLC0wLjEgLTAuMywtMC4zIC0wLjMsLTAuNSB6IgogICAgIGlkPSJwYXRoOC05LTUiCiAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICBzb2RpcG9kaTpub2RldHlwZXM9InNjY3Nzc3Njc3NzIiAvPjxwYXRoCiAgICAgaWQ9InJlY3QxLTEiCiAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MCIKICAgICBkPSJtIC0zLjk2MzkzMTgsMTQuMzQzNjQ1IGMgMCwwIDE2LjkzMDM3NzgsLTAuNDYxMTg4IDE3LjI4MzkzMTgsLTAuNzkyNjQ1IHYgMy45MzggYyAtMC4yODcyNjMsLTAuMjY1MTY2IC0xNy4yODM5MzE4LC0wLjc5MTc3MyAtMTcuMjgzOTMxOCwtMC43OTE3NzMgLTAuNjg2MzAyNiwwLjAwNDMgLTEuMTkyNjc1NiwtMC41NTgwMSAtMS4xODkwNDg4LC0xLjE5MzAwNCAwLjAwMzM3LC0wLjU5MDYxOCAwLjQ3OTg5NzMsLTEuMTQ4MzE5IDEuMTg5MDQ4OCwtMS4xNjA1NzggeiIKICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NzYyIKICAgICBpbmtzY2FwZTpsYWJlbD0icmVjdDEtMSIgLz48cGF0aAogICAgIGlkPSJyZWN0MS0yLTQiCiAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MCIKICAgICBkPSJNIDAuODQxODc1LDE0LjIxOTA0IEMgMi41OTk5MzE5LDE0LjE2NjE1IDguNDA4MDE4NCw3LjU4ODM1NzYgNy4zNzIzMzk0LDYuMjAyMjc4MSBMIDEwLjIwMDc2NCw5LjAzMDcwNSBjIC0wLjE3NjI0OCwxLjE1Nzc3IC01LjUyMjY5NTYsNy4zNzYyODEgLTYuMDUzMzk0Niw2LjAwNTY4NyB6IgogICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2MiIC8+PC9nPjwvc3ZnPg==';

    const { Cast, ArgumentType, BlockType } = Scratch;
    class Blocks {
        constructor() {
            this._counterStepSize = 1;
        }
        getInfo() {
            return {
                color1: '#FFAB19',
                color2: '#EC9C13',
                color3: '#CF8B17',
                id: 'CONTROL',
                name: lang('control.extName', 'Control'),
                blocks: [
                    {
                        opcode: 'repeatForSeconds',
                        extensions: ['colours_control'],
                        blockType: BlockType.LOOP,
                        branchCount: 1,
                        text: lang('control.repeatForSeconds', 'repeat [TIME] seconds'),
                        arguments: {
                            TIME: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '1'
                            }
                        }
                    },
                    {
                        blockType: BlockType.XML,
                        xml: `
                            <block id="for_each" type="control_for_each">
                                <value name="VALUE">
                                    <shadow type="math_whole_number">
                                        <field name="NUM">10</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                    {
                        opcode: 'for_each_2',
                        extensions: ['colours_control'],
                        blockType: BlockType.CONDITIONAL,
                        branchCount: 1,
                        text: lang('control.for_each_2', 'for each [VARIABLE] in [VALUE1] to [VALUE2]'),
                        arguments: {
                            VARIABLE: {
                                type: ArgumentType.STRING,
                                menu: "VARIABLES"
                            },
                            VALUE1: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '1'
                            },
                            VALUE2: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '10'
                            }
                        }
                    },
                    {
                        opcode: 'for_in_string',
                        extensions: ['colours_control'],
                        blockType: BlockType.CONDITIONAL,
                        branchCount: 1,
                        text: lang('control.for_in_string', 'for [VARIABLE] in str: [STRING]'),
                        arguments: {
                            VARIABLE: {
                                type: ArgumentType.STRING,
                                menu: "VARIABLES"
                            },
                            STRING: {
                                type: ArgumentType.STRING,
                                defaultValue: lang('control.helloWorld', 'Hello world!')
                            }
                        }
                    },
                    '---',
                    {
                        opcode: 'foreverIf',
                        extensions: ['colours_control'],
                        blockType: BlockType.LOOP,
                        branchCount: 1,
                        isTerminal: true,
                        text: lang('control.foreverIf', 'forever if [BOOL] then'),
                        arguments: {
                            BOOL: {
                                type: ArgumentType.BOOLEAN
                            }
                        }
                    },
                    {
                        opcode: 'foreverIfElse',
                        extensions: ['colours_control'],
                        blockType: BlockType.LOOP,
                        branchCount: 2,
                        isTerminal: true,
                        text: [
                            lang('control.foreverIf', 'forever if [BOOL] then'),
                            lang('control.else', 'else')
                        ],
                        arguments: {
                            BOOL: {
                                type: ArgumentType.BOOLEAN
                            }
                        }
                    },
                    '---',
                    {
                        opcode: 'doWhile',
                        extensions: ['colours_control'],
                        blockType: BlockType.CONDITIONAL,
                        branchCount: 1,
                        text: [
                            lang('control.doOnce', 'do once:'),
                            lang('control.thenLoopIf', 'then loops if [BOOL]') +
                            '[LOOP_ICON]'
                        ],
                        arguments: {
                            BOOL: {
                                type: ArgumentType.BOOLEAN
                            },
                            LOOP_ICON: {
                                type: ArgumentType.IMAGE,
                                dataURI: repeatIcon,
                                flipRTL: true
                            }
                        }
                    },
                    '---',
                    {
                        opcode: 'ifElseIf',
                        extensions: ['colours_control'],
                        blockType: BlockType.CONDITIONAL,
                        branchCount: 2,
                        text: [
                            lang('control.if', 'if [BOOL1] then'),
                            lang('control.elseIf', 'else if [BOOL2] then')
                        ],
                        arguments: {
                            BOOL1: {
                                type: ArgumentType.BOOLEAN
                            },
                            BOOL2: {
                                type: ArgumentType.BOOLEAN
                            }
                        }
                    },
                    {
                        opcode: 'ifElseIfElse',
                        extensions: ['colours_control'],
                        blockType: BlockType.CONDITIONAL,
                        branchCount: 3,
                        text: [
                            lang('control.if', 'if [BOOL1] then'),
                            lang('control.elseIf', 'else if [BOOL2] then'),
                            lang('control.else', 'else')
                        ],
                        arguments: {
                            BOOL1: {
                                type: ArgumentType.BOOLEAN
                            },
                            BOOL2: {
                                type: ArgumentType.BOOLEAN
                            }
                        }
                    },
                    '---',
                    {
                        opcode: 'wait',
                        extensions: ['colours_control'],
                        blockType: BlockType.COMMAND,
                        text: lang('control.wait', 'wait [DURATION] [UNITS]'),
                        arguments: {
                            DURATION: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '1'
                            },
                            UNITS: {
                                type: ArgumentType.STRING,
                                menu: "TIME_UNITS"
                            }
                        }
                    },
                    '---',
                    {
                        opcode: 'stopSprite',
                        extensions: ['colours_control'],
                        blockType: BlockType.COMMAND,
                        text: lang('control.stopSprite', 'stop [SPRITE]'),
                        arguments: {
                            SPRITE: {
                                type: ArgumentType.STRING,
                                defaultValue: ''
                            }
                        },
                        hideFromPalette: true
                    },
                    {
                        blockType: BlockType.XML,
                        xml: `
                            <block type="CONTROL_stopSprite">
                                <value name="SPRITE">
                                    <shadow type="control_create_clone_of_menu" />
                                </value>
                            </block>
                        `
                    },
                    '---',
                    {
                        opcode: 'greenFlag',
                        extensions: ['colours_control'],
                        blockType: BlockType.COMMAND,
                        isTerminal: true,
                        text: lang('control.greenFlag', 'restart')
                    },
                    '---',
                    {
                        opcode: 'switch',
                        extensions: ['colours_control'],
                        blockType: BlockType.CONDITIONAL,
                        branchCount: 1,
                        text: lang('control.switchCase', 'switch: [INPUT]'),
                        arguments: {
                            INPUT: {
                                type: ArgumentType.STRING,
                                defaultValue: ''
                            }
                        },
                        // hideFromPalette: true
                    },
                    {
                        opcode: 'case',
                        extensions: ['colours_control'],
                        blockType: BlockType.CONDITIONAL,
                        branchIconURI: breakIcon,
                        branchCount: 1,
                        text: lang('control.switchCaseCase', 'case: [INPUT]'),
                        arguments: {
                            INPUT: {
                                type: ArgumentType.STRING,
                                defaultValue: ''
                            }
                        },
                        // hideFromPalette: true
                    },
                    // 这会导致新的查找积木失效,不知道为什么
                    // {
                    //     blockType: BlockType.XML,
                    //     xml: `
                    //         <block type="CONTROL_switch">
                    //             <value name="INPUT">
                    //                 <shadow type="text">
                    //                     <field name="TEXT">${lang('control.branch', 'branch')}</field>
                    //                 </shadow>
                    //             </value>
                    //             <value name="SUBSTACK">
                    //                 <block type="CONTROL_case">
                    //                     <value name="INPUT">
                    //                         <shadow type="text">
                    //                             <field name="TEXT">${lang('control.branch', 'branch')}</field>
                    //                         </shadow>
                    //                     </value>
                    //                 </block>
                    //             </value>
                    //         </block>
                    //     `
                    // },
                    {
                        opcode: 'default',
                        extensions: ['colours_control'],
                        blockType: BlockType.CONDITIONAL,
                        branchCount: 1,
                        isTerminal: true,
                        text: lang('control.switchCaseDefault', 'default:')
                    },
                    '---',
                    {
                        blockType: BlockType.XML,
                        xml: `
                            <block type="control_get_counter"/>
                        `
                    },
                    {
                        opcode: 'setCounterStepSize',
                        extensions: ['colours_control'],
                        blockType: BlockType.COMMAND,
                        text: lang('control.set_counter_step_size', 'set counter step size to [NUM]'),
                        arguments: {
                            NUM: {
                                type: ArgumentType.NUMBER,
                                defaultValue: '1'
                            }
                        }
                    },
                    {
                        opcode: 'changeCounter',
                        extensions: ['colours_control'],
                        blockType: BlockType.COMMAND,
                        text: lang('control.change_counter', '[MODE] counter'),
                        arguments: {
                            MODE: {
                                type: ArgumentType.STRING,
                                menu: 'CHANGE_COUNTER'
                            }
                        }
                    },
                    '---',
                    {
                        opcode: 'newThread',
                        extensions: ['colours_control'],
                        text: lang('control.newThread', 'new thread'),
                        branchCount: 1,
                        branchIconURI: newThreadIcon,
                        blockType: BlockType.CONDITIONAL,
                    }
                ],
                menus: {
                    VARIABLES: {
                        acceptReporters: false,
                        items: "getVariables",
                    },
                    TIME_UNITS: {
                        acceptReporters: false,
                        items: [
                            {
                                text: formatMessage({
                                    id: 'control.seconds',
                                    default: 'seconds',
                                }),
                                value: 'seconds'
                            },
                            {
                                text: formatMessage({
                                    id: 'control.milliseconds',
                                    default: 'milliseconds',
                                }),
                                value: 'milliseconds'
                            },
                            {
                                text: formatMessage({
                                    id: 'control.microseconds',
                                    default: 'microseconds',
                                }),
                                value: 'microseconds'
                            },
                            {
                                text: formatMessage({
                                    id: 'control.minutes',
                                    default: 'minutes',
                                }),
                                value: 'minutes'
                            },
                            {
                                text: formatMessage({
                                    id: 'control.hours',
                                    default: 'hours',
                                }),
                                value: 'hours'
                            },
                            {
                                text: formatMessage({
                                    id: 'control.frames',
                                    default: 'frames',
                                }),
                                value: 'frames'
                            }
                        ]
                    },
                    CHANGE_COUNTER: {
                        acceptReporters: false,
                        items: [
                            {
                                text: formatMessage({
                                    id: 'control.clear',
                                    default: 'clear',
                                }),
                                value: 'clear'
                            },
                            {
                                text: formatMessage({
                                    id: 'control.increment',
                                    default: 'increment',
                                }),
                                value: 'increment'
                            },
                            {
                                text: formatMessage({
                                    id: 'control.reduction',
                                    default: 'reduction',
                                }),
                                value: 'reduction'
                            }
                        ]
                    }
                }
            };
        }

        getVariables() {
            const variables =
                typeof Blockly === "undefined"
                    ? []
                    : Blockly.getMainWorkspace()
                        .getVariableMap()
                        .getVariablesOfType("")
                        .map((model) => ({
                            text: model.name,
                            value: model.getId(),
                        }));
            if (variables.length > 0) {
                return variables;
            } else {
                return [""];
            }
        }

        /**
         * 重复执行（）秒块。
         * @param {number} TIME 重复执行的时间。（秒）
         */
        repeatForSeconds(args, util) {
            // 这玩意的编译搁 “../../compiler/irgen” 这个文件里。
            const duration = Math.max(0, 1000 * Cast.toNumber(args.TIME));
            if (util.stackTimerNeedsInit()) {
                util.startStackTimer(duration);
                Scratch.vm.runtime.requestRedraw();
                util.startBranch(1, true);
            } else if (!util.stackTimerFinished()) {
                util.startBranch(1, true);
            }
        }

        /**
         * 简单的 for 循环，但是有两个值。
         * @param {object} VARIABLE 要操作的变量。 
         * @param {number} VALUE1 开始值。
         * @param {number} VALUE2 结束值。
         */
        for_each_2(args, util) {
            // 这玩意的编译搁 “../../compiler/irgen” 这个文件里。
            args.VALUE1 = Cast.toNumber(args.VALUE1);
            args.VALUE2 = Cast.toNumber(args.VALUE2);

            const variable = util.target.lookupOrCreateVariable(
                args.VARIABLE,
                args.VARIABLE
            );

            const up = args.VALUE1 < args.VALUE2;

            if (typeof util.stackFrame.index === 'undefined') {
                if (up) util.stackFrame.index = Math.min(args.VALUE1, args.VALUE2) - 1;
                else util.stackFrame.index = Math.max(args.VALUE1, args.VALUE2) + 1;
            }

            if (up ? util.stackFrame.index < Math.max(args.VALUE1, args.VALUE2) :
                util.stackFrame.index > Math.min(args.VALUE1, args.VALUE2)) {
                up ? util.stackFrame.index++ : util.stackFrame.index--;
                variable.value = util.stackFrame.index;
                util.startBranch(1, true);
            }
        }

        /**
         * 简单的字符串的 for 循环。
         * @param {object} VARIABLE 要操作的变量。 
         * @param {string} STRING 遍历的字符串。 
         */
        for_in_string(args, util) {
            // 这玩意的编译搁 “../../compiler/irgen” 这个文件里。
            const inputString = String(args.STRING);

            const variable = util.target.lookupOrCreateVariable(
                args.VARIABLE,
                args.VARIABLE
            );

            if (typeof util.stackFrame.index === 'undefined') {
                util.stackFrame.index = 0;
                util.stackFrame.str = '';
            }

            if (util.stackFrame.index < inputString.length) {
                util.stackFrame.str = inputString[util.stackFrame.index];
                util.stackFrame.index++;
                variable.value = util.stackFrame.str;
                util.startBranch(1, true);
            }
        }

        foreverIf(args, util) {
            if (Cast.toBoolean(args.BOOL)) {
                util.startBranch(1, true);
            }
            else util.startBranch(2, true);
        }

        foreverIfElse(args, util) {
            const condition = Cast.toBoolean(args.BOOL);
            let branchCount = 1;
            if (!condition) branchCount = 2;
            util.startBranch(branchCount, true);
        }

        ifElseIf(args, util) {
            const condition1 = Cast.toBoolean(args.BOOL1);
            const condition2 = Cast.toBoolean(args.BOOL2);
            if (condition1) {
                util.startBranch(1, false);
            }
            else if (condition2) {
                util.startBranch(2, false);
            }
            else {
                util.startBranch(3, false);
            }
        }

        doWhile({ BOOL }, util) {
            if (!util.stackFrame.first) {
                util.stackFrame.first = true;
                util.startBranch(1, true);
            }
            else if (Cast.toBoolean(BOOL)) {
                util.startBranch(1, true);
            }
        }

        ifElseIfElse(args, util) {
            this.ifElseIf(args, util);
        }

        wait(args, util) {
            const duration = Math.max(0, Cast.toNumber(args.DURATION));
            const units = args.UNITS || 'seconds';
            if (units !== 'frames') {
                if (util.stackTimerNeedsInit()) {
                    let waitTime = duration;
                    if (units === 'seconds') {
                        waitTime = duration * 1000;
                    } else if (units === 'milliseconds') {
                        waitTime = duration;
                    } else if (units === 'microseconds') {
                        waitTime = duration / 1000;
                    } else if (units === 'minutes') {
                        waitTime = duration * 1000 * 60;
                    } else if (units === 'hours') {
                        waitTime = duration * 1000 * 60 * 60;
                    }
                    util.startStackTimer(waitTime);
                    vm.runtime.requestRedraw()
                    util.yield();
                } else if (!util.stackTimerFinished()) {
                    util.yield();
                }
            }
            else {
                if (typeof util.stackFrame.loopCounter === "undefined") {
                    util.stackFrame.loopCounter = duration;
                }
                util.stackFrame.loopCounter--;
                if (util.stackFrame.loopCounter >= 0) {
                    util.yieldTick();
                }
            }
        }

        stopSprite(args, util) {
            const sprite = args.SPRITE;
            let target;
            if (sprite === '_myself_') {
                target = util.target;
            } else if (sprite === '_stage_') {
                target = vm.runtime.getTargetForStage();
            } else {
                target = vm.runtime.getSpriteTargetByName(sprite);
            }
            if (target) {
                vm.runtime.stopForTarget(target);
            }
        }

        greenFlag = () => vm.greenFlag();

        // switch 本来想写作用域功能，但是后面没有成功，就先这样子吧

        switch(args, util) {
            const varName = Cast.toString(args.INPUT);
            const thread = util.thread;
            thread.switchVar = varName;
            thread.switchScope = {};
            thread.switchBranches = [];
            util.startBranch(1, false);
        }

        case(args, util) {
            const varName = Cast.toString(args.INPUT);
            const thread = util.thread;
            const switchVar = thread.switchVar;
            const switchBranches = thread.switchBranches;

            if (switchVar === varName) {
                const branch = util.startBranch(1, false);
                switchBranches.push(branch);
                thread.switchVar = null;
            }
        }

        default(args, util) {
            const thread = util.thread;
            const switchBranches = thread.switchBranches;

            try {
                if (switchBranches.length === 0) {
                    util.startBranch(1, false);
                    delete thread.switchVar;
                }
            }
            catch { }
        }

        setCounterStepSize({ NUM }) {
            this._counterStepSize = Cast.toNumber(NUM);
        }

        changeCounter({ MODE }) {
            const ext_scratch3_control = vm.runtime.ext_scratch3_control;
            const stepSize = this._counterStepSize;
            if (MODE === 'clear') ext_scratch3_control._counter = 0;
            if (MODE === 'increment') ext_scratch3_control._counter += stepSize;
            if (MODE === 'reduction') ext_scratch3_control._counter -= stepSize;
        }

        newThread({ }, util) {
            let targetBranch = util.thread.target.blocks.getBranch(util.thread.peekStack(), 0);
            if (targetBranch) {
                util.sequencer.runtime._pushThread(targetBranch, util.target, {});
            }
        }
    }

    Scratch.extensions.register(new Blocks());
})(Scratch);
