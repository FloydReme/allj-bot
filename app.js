const {VK} = require('vk-io');
const {MessageContext} = require('vk-io');
const fs = require('fs')
const vk = new VK();
const {api} = vk;
const {updates} = vk;
const {upload} = vk;


/*https://api.vk.com/method/messages.getConversationsById?peer_ids=368418604,2000000041,-167824979&access_token=токен&v=5.80*/


//Не трогать
const TOKEN = "токен"

vk.setOptions({
    token: TOKEN
})


//Святыня
require('https').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('')
});


updates.startPolling()

updates.use(async (context, next) => {
	if (context.is('message') && context.isOutbox()) {
		return;
	}

	try {
		await next();
	} catch (error) {
		console.error('Error:', error);
	}
});

//Блок команд
updates.hear('/start', async(context) => {
    await context.send('Элджей на связи. Вьетнам параша, корень - мой батя!\nМои команды:\n/рофл - получи шутку\n/элджей - получи по ебалу\n/кто - хз, мирош не придумал описание, но все равно зацени\n/корень - потролль легенду')
})

updates.hear('/рофл', async(context) => { 
        await context.send('Рофл у тебя в штанах')
        console.log(context.getPeerId())    
})

updates.hear('/элджей', async(context) => {
    await context.send('Хотите лучшей музыки на планете? \n/да - ну вы поняли\n/нет - вы там чо охуели? только да, пидорасы')
})

var songs = new Array(5)
songs[0] = 'audio371745447_456507674',
songs[1] = 'audio371745438_456563093',
songs[2] = 'audio371745430_456570060',
songs[3] =  'audio371745440_456390427',
songs[4] = 'audio371745451_456401507'


let k = songs[Math.floor(Math.random() * songs.length)]

updates.hear('/да', async(context) =>{
    await Promise.all([
        context.send('Ну тогда держи трек, сладкий'),
        context.send({
            attachment: k 
        })
    ])  
})

updates.hear('/нет', async(context) =>{
    await Promise.all([
        context.send('Я же сказал:"только да". Тупое животное - соси хуй'),
        context.send({
            attachment: k 
        })
    ])  
})


var answers5 = new Array(3)
answers5[0] = 'Мамка твоя, распиздяй ебаный'
answers5[1] = 'Батя твой, хуйло обоссаное'
answers5[2] = 'Ты, чмошник'
var c = answers5[Math.floor(Math.random() * answers5.length)]
updates.hear(/\/кто (.+)/i, async(context) => {
    await context.send(c)
})

updates.hear(/\/корень (.+)/i, async(context) => {
    await context.send('Мамка не пустила')
})

//Блок регулярных выражений
var reg1 = new Array(5);
reg1[0] = RegExp(/полина/i);
reg1[1] = RegExp(/полины/i);
reg1[2] = RegExp(/полине/i);
reg1[3] = RegExp(/полину/i);
reg1[4] = RegExp(/полиной/i);
var answers1 = new Array(5);
answers1[0] = "Ха, я ебал таких телок еще в 2007";
answers1[1] = "У Насти Ивлеевой даже не так";
answers1[2] = "Достойна награды 'Учитель Года'";
answers1[3] = "Ну хуй знает, я бы вдул";
answers1[4] = "Попробуй, выеби ее, лошара";
var a = answers1[Math.floor(Math.random() * answers1.length)]
updates.hear(reg1, async(context) => {
    await context.send(a)
})


var reg2 = new Array(8);
reg2[0] = RegExp(/фараон/i);
reg2[1] = RegExp(/pharaoh/i);
reg2[2] = RegExp(/фара/i);
reg2[3] = RegExp(/фараоха/i);
reg2[4] = RegExp(/фараона/i);
reg2[5] = RegExp(/фараону/i);
reg2[6] = RegExp(/фары/i);
reg2[7] = RegExp(/фаре/i);
var answers2 = new Array(2);
answers2[0] = "ХАХАМЕРТВЫЕ НАЙКИ СУКА ЕБАТЬ МНЕ ПРЕТ УХ ОХУЕТЬ. КТО ТВОЙ ИДОЛ?";
answers2[1] = "СКР-СКР-СКР. Че, подумал, что мне это нравится? Ебать ты долбоеб, братишка, земля пухом";
var b = answers2[Math.floor(Math.random() * answers2.length)]
updates.hear(reg2, async(context) => {
    await context.send(b)
})


var answers3 = new Array(5);
answers3[0] = "уебан";
answers3[1] = "уебану";
answers3[2] = "уебана";
answers3[3] = "уебаном";
answers3[4] = "уебаны";
updates.hear(answers3, async(context) => {
    await context.send('Бойко что ли?')
})

var reg3 = new RegExp(/базаришь/i)
updates.hear(reg3, async(context) => {
    await context.send('Конечно')
})



var reg4 = new Array(7)
reg4[0] = new RegExp(/канава/i);
reg4[1] = new RegExp(/канаве/i);
reg4[2] = new RegExp(/канаву/i);
reg4[3] = new RegExp(/канавы/i);
reg4[4] = new RegExp(/охуененок/i);
reg4[5] = new RegExp(/охуененка/i);
reg4[6] = new RegExp(/мать/i);
updates.hear(reg4, async(context) => {
    await context.send('Ты бля, перхоть ебаная, совсем нахуй охуел? Приеду ща в твой Усть-пиздинск и обоссу, параша')
})



var reg5 = new Array(11)
reg5[0] = new RegExp(/леоныча/i)
reg5[1] = new RegExp(/леоныч/i)
reg5[2] = new RegExp(/герыч/i)
reg5[3] = new RegExp(/герыча/i)
reg5[4] = new RegExp(/герычу/i)
reg5[5] = new RegExp(/герыча/i)
reg5[6] = new RegExp(/леонычу/i)
reg5[7] = new RegExp(/хата/i)
reg5[8] = new RegExp(/хаты/i)
reg5[9] = new RegExp(/хату/i)
reg5[10] = new RegExp(/хате/i)
var answers4 = new Array(4)
answers4[0] = 'Ебать, я рофлил с этого еще когда Кеннеди был жив'
answers4[1] = 'Кто-то предложил сыграть в Far Cry 5?'
answers4[2] = 'Мне тоже зимой холодно, ага, охуеть, правда?'
answers4[3] = 'Масленица еще не наступила, ебланы'
var q = answers4[Math.floor(Math.random() * answers4.length)]
updates.hear(reg5, async(context) =>{
    await Promise.all([
        context.send(q),
        context.send({
            attachment: 'photo-167824979_456239020'
        })
    ])  
})


var reg6 = new Array(9)
reg6[0] = new RegExp(/полковник/i)
reg6[1] = new RegExp(/полковника/i)
reg6[2] = new RegExp(/полковнику/i)
reg6[3] = new RegExp(/леха/i)
reg6[4] = new RegExp(/полковнике/i)
reg6[5] = new RegExp(/полковником/i)
reg6[6] = new RegExp(/лехе/i)
reg6[7] = new RegExp(/леху/i)
reg6[8] = new RegExp(/лехи/i)
var answers6 = new Array(4)
answers6[0] = "Так, ебать. Полковник только я, считаешь иначе - пришлю трек элджея, хуесосина"
answers6[1] = "В армии сидят только пидорасы"
answers6[2] = "Он гук, бля буду"
answers6[3] = "Он полковник, а все пидоры"
var j = answers6[Math.floor(Math.random() * answers6.length)]
updates.hear(reg6, async(context) => {
    await context.send(j)
})



var reg7 = new Array(9)
reg7[0] = new RegExp(/стас/i)
reg7[1] = new RegExp(/стаса/i)
reg7[2] = new RegExp(/стасу/i)
reg7[3] = new RegExp(/cтасе/i)
reg7[4] = new RegExp(/стасом/i)
reg7[5] = new RegExp(/казах/i)
reg7[6] = new RegExp(/казаха/i)
reg7[7] = new RegExp(/казаху/i)
reg7[8] = new RegExp(/казахом/i)
var answers7 = new Array(3)
answers7[0] = "Мен сені аузыма салдым, антихайп"
answers7[1] = "Лучшая трава растет у моей бабки на огороде, такое даже казахам не снилось"
answers7[2] = "Казахи - лучшие люди. Считаешь иначе? За тобой уже выехал бумер со Стасом и шлюхами"
var huy = answers7[Math.floor(Math.random() * answers7.length)]
updates.hear(reg7, async(context) => {
    await context.send(huy)
})



updates.hear('хуево', async(context) => {
    await context.send('Жиза, мне тоже чет хуево иногда. Печально, в общем')
})

updates.hear('кек', async(context) => {
    await context.send('Хуек, долбоеб тупой')
})


var reg8 = new Array(5)
reg8[0] = new RegExp(/мак/i)
reg8[1] = new RegExp(/мака/i)
reg8[2] = new RegExp(/маку/i)
reg8[3] = new RegExp(/маке/i)
reg8[4] = new RegExp(/маком/i)
var answers8 = new Array(3)
answers8[0] = "ФСБ СУКА ВОРВАЛСЯ В ЭТУ БЕСЕДУ И ИЩЕТ АНИМЕ-ДРОЧЕРА. ПРОЙДЕМТЕ НАХУЙ"
answers8[1] = "Товарищ майор тоже оценил🌚"
answers8[2] = "Такс-такс, шо тут у нас. Ааа, до это же уголовочка"
var g = answers8[Math.floor(Math.random() * answers8.length)]
updates.hear(reg8, async(context) => {
    await context.send(g)
})

updates.hear(/мем/i, async(context) => {
    await context.send('Вся твоя жизнь - один сплошной мем, лошара')
})

var reg9 = new Array(4)
reg9[0] = new RegExp(/ор/i)
reg9[1] = new RegExp(/ору/i)
reg9[2] = new RegExp(/орейро/i)
reg9[3] = new RegExp(/орео/i)
updates.hear(reg9, async(context) => {
    const voicekek = 'https://psv4.userapi.com/c628603/u204071062/audiomsg/d2/7377219a92.mp3'
    await Promise.all([
        context.sendVoice(voicekek)
    ])  
})

var reg10 = new Array(3)
reg10[0] = new RegExp(/Милова/i)
reg10[1] = new RegExp(/миловой/i)
reg10[2] = new RegExp(/милову/i)
var answers9 = new Array(4)
answers9[0] = "НЕ ЕБИТЕ МИЛОВУ - ЛЕЧИТЬСЯ У ВЕНЕРОЛОГА БУДЕТЕ, ГЛУПЦЫ"
answers9[1] = "Я ебал таких телок еще когда Полковник в лего играл"
answers9[2] = "8 Маков из 10"
answers9[3] = "СУКА ОНА РЕБЕНОК"
answers9[4] = "НА ХУЙ ОНА ВАМ СДАЛАСЬ? ЛУЧШЕ БЫ МНЕ НА ХУЙ УПАЛА"
var l = answers9[Math.floor(Math.random() * answers9.length)]
updates.hear(reg10, async(context) => {
    await context.send(l)
})