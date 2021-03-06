(function(){
// Jasdeep Khalsa - @JasdeepKhalsa1
// v0.0.1 (pre-Alpha)

// Preamble:
/* Whilst you are alive, whilst you have breaths, you have the form of the body
 * which exists inside the spirit. The spirit is forever, the body is perishable.
 * The success of your life depends upon your perspective and your ability to
 * manage your emotions. If you can come from a wider perspective and be more
 * inclusive, your relationships with others will flourish. If you can manage
 * your emotions and not react but act, your relationships with others will
 * flourish.
 * 
 * Relationships are the cornerstone of life, their flourishing is directly
 * proportional to your success and happiness. This includes your relationship
 * to yourself, your parents, friends, family, significant others, nature and
 * the Universe.
 */

// John Resig's Simple Class Inheritance
(function(){var a=false,b=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;this.Class=function(){};Class.extend=function(g){var f=this.prototype;a=true;var e=new this();a=false;for(var d in g){e[d]=typeof g[d]=="function"&&typeof f[d]=="function"&&b.test(g[d])?(function(h,i){return function(){var k=this._super;this._super=f[h];var j=i.apply(this,arguments);this._super=k;return j}})(d,g[d]):g[d]}function c(){if(!a&&this.init){this.init.apply(this,arguments)}}c.prototype=e;c.prototype.constructor=c;c.extend=arguments.callee;return c}})();

// Global Variables (Unchanging)
life = 1; // Something
death = 0; // Nothing
reincarnation = Infinity; // Everything

Spirit = Class.extend({
	init: function(){
		this.space = 'Nowhere';
		this.time = 'Timeless';
		this.form = 'Formless';
		this.name = 'Nameless';
	}	
});

Universe = Spirit.extend({
	init: function(){
		this.space = 'Everywhere';
		this.time = 'Forever';
		this.form = 'Multitudinal';
		this.name = 'Universe';
	}
});

var spirit = new Spirit();
var universe = new Universe();

// Local Variables (Changing)
var tests = [];
	
var World = Universe.extend({
	init: function(galaxy, time, form, name){
		this.galaxy = galaxy || 'Galaxy'; // space
		this.time = new Date(time) || 0; // time
		this.form = form || 'Planet'; // form
		this.name = name || 'M Class'; // identity
	}
});

var Person = Spirit.extend({
	init: function(world, time, form, name){
		this.world = world || 'Earth'; // space
		this.time = new Date(time) || 0; // time
		this.form = form || 'Being'; // form
		this.name = name || 'Anonymous'; // identity
	},
	age : function(){
		return new Number(((new Date() - this.time) /1000/60/60/24/7/52)).toFixed();
	}
});

function Life(){
	life = 1;
	Incarnate('world', World, Karma('world'));
	Incarnate('person', Person, Karma('person'));
	return log('You were born');
}

function Living(){
	// TODO: Other life activities
}

function Tests(){
	test('Tests of Character from Life',function(){
		strictEqual('Fear','Courage','Did you live a life of courage or fear?');
		strictEqual('Arrogance','Kindness','Were you kind or arrogant to those you disliked?');
		strictEqual('Anger','Forgiveness','Did you forgive and forget, or hold onto grudges?');
		strictEqual('Selfishness','Sharing','Did you share yourself, your heart or care only about yourself?');
		strictEqual('Lust','Emotional Balance','Did you lust after things rather than maintain a healthy balance?');
		strictEqual('Ego','Humility','When life tested your character, were you humble or egotistical?');
	});

	test('Your Expectations of Life', function(){
		strictEqual('Hurt','Love','What did you expect to receive from your relationships?');
		strictEqual('Loneliness','Happiness','How did you expect to feel in life, in your relationships?');
		strictEqual('Average','Rich','How wealthy did you expect to be?');
		strictEqual('Dreaming','Living','Did you chase after your dreams, making them a reality, or just remain a dreamer?');
	});
}

function TestsResult(){
	QUnit.log = function(test) {
		log(test.name+': '+ test.message,true);
		if(test.result){
			log("PASS"+' Expected: '+test.expected+' Actual: '+test.actual,true);
		}
		if(!test.result){
			log("FAIL"+' Expected: '+test.expected+' Actual: '+test.actual,true);
			tests.push(test.result);
		}
	};
}

function Death(){
	life = death;
	return log('You just died');
}

function Reincarnation(){
	life = 1;
	log("Commiserations, you just reincarnated...AGAIN!\nWell, not so bad I suppose, you get another shot at it! ;)");
	return Main();
}

function Incarnate(variable, constructor, params){
	var params = params;
	var variable = new constructor();
	constructor.apply(variable, params);
	return log(variable);
}

function Karma(type){
	var karma = [];
	var type = type;
	if(type === 'world'){
		var karma = [['Milky Way','-271820, 1, 1','Planet','Earth'],['Milky Way','-271820, 1, 1','Planet','Mars'],['Milky Way','-271820, 1, 1','Planet','55 Cancri-f']];
	}
	else if(type === 'person'){
		var karma = [['London','Jul 19, 1976','Human','Michael Humfreys'],['New York','Feb 08, 1942','Human','John Cason'],['Epimentia','Dec 06, 1808','Alien','Zorba Antwerp'],['Shanghai','Apr 05, 3080','Cyborg','Fung Hai']];
	}
	else{
		karma = []
		return karma;
	}
	var random = Math.floor(Math.random()*karma.length);
	return karma[random];
}

function Liberation(){
	return log('Congraulations, you have attained the ultimate liberation!');
}

function Main(){
	while(life === 1){	
		Life();
		
		Living();
		
		Tests();
		
		Death();

		TestsResult();
		
		setTimeout(function(){
			if(!tests.length){
				reincarnation === 0;
				Liberation();
					
			}
			if(tests.length){
				reincarnation === Infinity;
					Reincarnation();
			}
		}, 5000);
	}
};

Main();

function log(obj, hide){
	var func = 0;
	var hide = hide;
	if(!hide){
		var name = obj.name || 'Announcement';
		console.warn('---',name,'---');
	}
	switch(typeof(obj)){
		case 'string':
			console.log(obj);
			break;
		case 'object':
			for(var prop in obj){
				switch(typeof(obj[prop])){
					case 'string':
						console.log(prop,' : ',obj[prop]);
						break;
					case 'object':
						console.log(prop,' : ',obj[prop]);
						break;
					case 'function':
						if(func !== 0 && obj[prop].name != 'c'){
							console.log(prop,' : ',obj[prop]());
						}
						++func;
						break;
					default:
						console.log(typeof(obj[prop]), obj[prop]);
						break;
				}
			}
			break;
	}
	if(!hide){
	console.log('--------------');
	}
}
})();