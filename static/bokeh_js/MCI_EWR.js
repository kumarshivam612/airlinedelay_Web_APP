document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("de327703-5b26-4a6f-9d84-c5923ce36576");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'de327703-5b26-4a6f-9d84-c5923ce36576' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"0735a187-018b-4e06-9352-af641c8735df":{"roots":{"references":[{"attributes":{"data_source":{"id":"804f7c86-6fd4-46f2-898f-680a63cf2b0c","type":"ColumnDataSource"},"glyph":{"id":"f8ba0fdd-3777-4a69-9757-ab75555ab95b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c7719980-102f-4fc4-bef7-f8af8a788950","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[23.967741935483872,26.423076923076923,26.0,25.941176470588236,24.9,24.551020408163264,23.666666666666668,24.5,25.065217391304348,24.933333333333334,24.68421052631579,24.045454545454547],"x":[10,18,13,14,11,14,18,14,17,18,14,18],"y":["Monday","Monday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Friday","Friday","Saturday","Sunday","Sunday"]}},"id":"bc5a9325-a5e8-45e8-a93e-eee271a2d2c7","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"dc35ab43-2e9a-4c5a-9e08-ba4685386730","type":"Title"},{"attributes":{"callback":null,"tabs":[{"id":"91bbc5ba-3216-4f3f-92a3-7b4742e161f8","type":"Panel"}]},"id":"034b61ae-ea17-4d57-99dc-f554f60a3171","type":"Tabs"},{"attributes":{"data_source":{"id":"bc5a9325-a5e8-45e8-a93e-eee271a2d2c7","type":"ColumnDataSource"},"glyph":{"id":"bf1f9c75-249f-4c04-a70f-aba439851614","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fa7ca05c-a61e-495d-89f0-da710a178e5d","type":"GlyphRenderer"},{"attributes":{"color_mapper":{"id":"bb678470-3cb4-48b7-b7d9-74edbf99662a","type":"LinearColorMapper"},"formatter":{"id":"a0c7f4ee-a3f4-433b-961f-60f95018e792","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"591bb5b8-bc9b-4787-b013-a5e72ce6192a","subtype":"Chart","type":"Plot"},"ticker":{"id":"b3eb77b1-b7f5-4b70-8b30-3b40fc3ac126","type":"BasicTicker"}},"id":"95c228c0-185c-49e9-9d42-80ff289833ac","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f8ba0fdd-3777-4a69-9757-ab75555ab95b","type":"Rect"},{"attributes":{},"id":"b3eb77b1-b7f5-4b70-8b30-3b40fc3ac126","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[21.9,22.214285714285715,20.96153846153846,20.170212765957448,20.92452830188679,22.25,20.576923076923077],"x":[17,19,17,17,6,10,17],"y":["Monday","Monday","Wednesday","Thursday","Friday","Friday","Saturday"]}},"id":"0a5ec1b0-e276-4065-b120-ff52b87f8d1e","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"05e9e14b-500a-47ce-96d9-da4ad322d62f","type":"FactorRange"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f67907d6-a204-424c-bb85-0799f63db563","type":"PanTool"},{"id":"6907e50d-de26-4eb1-b83c-dee49468040e","type":"WheelZoomTool"},{"id":"7cf65f48-c1ec-4fc7-91fc-a3bab348fea0","type":"BoxZoomTool"},{"id":"c4f60749-c4e4-4f1a-b3c8-36f821ab81ad","type":"SaveTool"},{"id":"6278c91c-84ad-4bb2-8d0b-c46119b79c88","type":"ResetTool"},{"id":"c3de31dd-4d93-447d-9128-e35d3d62fafb","type":"HelpTool"}]},"id":"e5529e2b-1aa0-419c-ab11-7431ef65b379","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[1.5555555555555556,0.7142857142857143,2.9583333333333335,0.0,1.25,0.0,0.42857142857142855,3.25,3.2857142857142856,0.0,0.0,0.0,0.0,0.8571428571428571,0.0],"x":[5,7,5,8,15,13,7,13,7,7,9,19,20,7,9],"y":["Monday","Monday","Tuesday","Tuesday","Tuesday","Wednesday","Thursday","Thursday","Friday","Saturday","Saturday","Saturday","Saturday","Sunday","Sunday"]}},"id":"7e9da42f-233e-4078-8aff-5613f05355fc","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"e2c9d455-4895-4254-a991-cf89aafad75d","type":"ColumnDataSource"},"glyph":{"id":"7fadd3b1-3b34-454a-aa8f-53a9de0ac31c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9d4b9aa2-1c58-48fd-ab96-c55a26b7a95e","type":"GlyphRenderer"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"bb678470-3cb4-48b7-b7d9-74edbf99662a","type":"LinearColorMapper"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[13.08695652173913,11.454545454545455,11.5,11.38888888888889,11.830985915492958,10.16,11.75],"x":[11,15,18,10,11,14,17],"y":["Monday","Monday","Tuesday","Wednesday","Saturday","Saturday","Sunday"]}},"id":"804f7c86-6fd4-46f2-898f-680a63cf2b0c","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[17.857142857142858,16.681818181818183,19.24,17.833333333333332,19.346153846153847,17.80952380952381,17.615384615384617,19.615384615384617,17.40740740740741,19.080645161290324,17.79310344827586],"x":[7,11,19,7,19,5,19,10,10,11,19],"y":["Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Thursday","Saturday","Sunday","Sunday","Sunday"]}},"id":"47728813-9d45-43ea-8b7e-77b79fe265fe","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5bb75f43-ee96-44ed-b361-e67e1fe60857","type":"ColumnDataSource"},"glyph":{"id":"03732c45-0469-40ac-9cd4-148364bf3c84","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"da753881-43f4-4f3b-acd2-fa7a20beec2d","type":"GlyphRenderer"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"a3509b0c-079e-47dc-b6a6-10cb85c434ee","type":"LinearAxis"}],"left":[{"id":"ffd55669-3713-4101-9019-1d1e01178751","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"297b6975-cd34-447c-b021-17d7c217fc69","type":"BoxAnnotation"},{"id":"f432354e-f22d-41eb-aa36-2b496d264221","type":"GlyphRenderer"},{"id":"fa7ca05c-a61e-495d-89f0-da710a178e5d","type":"GlyphRenderer"},{"id":"ea6627bd-4e7b-41dc-a552-59979f815412","type":"GlyphRenderer"},{"id":"9e92a035-d52a-49be-a9d0-9d7f64e74f86","type":"GlyphRenderer"},{"id":"9d4b9aa2-1c58-48fd-ab96-c55a26b7a95e","type":"GlyphRenderer"},{"id":"c7719980-102f-4fc4-bef7-f8af8a788950","type":"GlyphRenderer"},{"id":"da753881-43f4-4f3b-acd2-fa7a20beec2d","type":"GlyphRenderer"},{"id":"a30aa49b-ee53-4836-9425-d9fc9c000fc1","type":"GlyphRenderer"},{"id":"17ee1ef4-cb41-463b-a27d-49080ec51b3f","type":"GlyphRenderer"},{"id":"a3509b0c-079e-47dc-b6a6-10cb85c434ee","type":"LinearAxis"},{"id":"ffd55669-3713-4101-9019-1d1e01178751","type":"CategoricalAxis"},{"id":"95c228c0-185c-49e9-9d42-80ff289833ac","type":"ColorBar"}],"right":[{"id":"95c228c0-185c-49e9-9d42-80ff289833ac","type":"ColorBar"}],"title":{"id":"dc35ab43-2e9a-4c5a-9e08-ba4685386730","type":"Title"},"tool_events":{"id":"39868c89-8469-4bab-a023-a9778d4ceca8","type":"ToolEvents"},"toolbar":{"id":"e5529e2b-1aa0-419c-ab11-7431ef65b379","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"1bd74e80-63e8-401c-996a-379455a704a9","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"05e9e14b-500a-47ce-96d9-da4ad322d62f","type":"FactorRange"}},"id":"591bb5b8-bc9b-4787-b013-a5e72ce6192a","subtype":"Chart","type":"Plot"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"6fe6cb89-0714-40c7-980f-07649b76278d","type":"BasicTickFormatter"},"plot":{"id":"591bb5b8-bc9b-4787-b013-a5e72ce6192a","subtype":"Chart","type":"Plot"},"ticker":{"id":"78348307-fadf-4bf9-b58a-5053b55ec2f7","type":"BasicTicker"}},"id":"a3509b0c-079e-47dc-b6a6-10cb85c434ee","type":"LinearAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6f436af7-733e-4002-a08b-5f91bb68ea0f","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.655172413793103,9.46938775510204,8.777777777777779,9.208333333333334,9.458333333333334,8.25,8.125],"x":[10,17,5,6,5,13,5],"y":["Tuesday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]}},"id":"5bb75f43-ee96-44ed-b361-e67e1fe60857","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"03732c45-0469-40ac-9cd4-148364bf3c84","type":"Rect"},{"attributes":{"plot":{"id":"591bb5b8-bc9b-4787-b013-a5e72ce6192a","subtype":"Chart","type":"Plot"}},"id":"c3de31dd-4d93-447d-9128-e35d3d62fafb","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0,28.363636363636363,30.0,28.186046511627907,28.25,30.0,30.0,30.0,30.0,29.416666666666668,30.0,30.0,30.0],"x":[13,14,15,18,10,11,14,15,11,15,18,6,8,13,15],"y":["Monday","Monday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Thursday","Friday","Friday","Friday","Saturday","Sunday","Sunday","Sunday"]}},"id":"1635f255-fe79-4825-8229-fca71c50115e","type":"ColumnDataSource"},{"attributes":{},"id":"6fe6cb89-0714-40c7-980f-07649b76278d","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c6f58318-16e8-4acc-a0b0-0885ff9ed70d","type":"Rect"},{"attributes":{"data_source":{"id":"7e9da42f-233e-4078-8aff-5613f05355fc","type":"ColumnDataSource"},"glyph":{"id":"8e3901e1-055e-4830-ab29-464695e1873c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"17ee1ef4-cb41-463b-a27d-49080ec51b3f","type":"GlyphRenderer"},{"attributes":{},"id":"78348307-fadf-4bf9-b58a-5053b55ec2f7","type":"BasicTicker"},{"attributes":{"plot":{"id":"591bb5b8-bc9b-4787-b013-a5e72ce6192a","subtype":"Chart","type":"Plot"}},"id":"c4f60749-c4e4-4f1a-b3c8-36f821ab81ad","type":"SaveTool"},{"attributes":{"data_source":{"id":"0a5ec1b0-e276-4065-b120-ff52b87f8d1e","type":"ColumnDataSource"},"glyph":{"id":"6f436af7-733e-4002-a08b-5f91bb68ea0f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ea6627bd-4e7b-41dc-a552-59979f815412","type":"GlyphRenderer"},{"attributes":{},"id":"ddf7fb66-7346-4a44-b874-760a4851269e","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"47728813-9d45-43ea-8b7e-77b79fe265fe","type":"ColumnDataSource"},"glyph":{"id":"65d7e923-2abb-4274-839d-c28423fbe813","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9e92a035-d52a-49be-a9d0-9d7f64e74f86","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[13.543859649122806,16.25,13.846153846153847,15.25],"x":[6,13,19,15],"y":["Wednesday","Friday","Friday","Saturday"]}},"id":"e2c9d455-4895-4254-a991-cf89aafad75d","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"591bb5b8-bc9b-4787-b013-a5e72ce6192a","subtype":"Chart","type":"Plot"}},"id":"6278c91c-84ad-4bb2-8d0b-c46119b79c88","type":"ResetTool"},{"attributes":{"child":{"id":"591bb5b8-bc9b-4787-b013-a5e72ce6192a","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"91bbc5ba-3216-4f3f-92a3-7b4742e161f8","type":"Panel"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"bf1f9c75-249f-4c04-a70f-aba439851614","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"65d7e923-2abb-4274-839d-c28423fbe813","type":"Rect"},{"attributes":{"plot":{"id":"591bb5b8-bc9b-4787-b013-a5e72ce6192a","subtype":"Chart","type":"Plot"}},"id":"6907e50d-de26-4eb1-b83c-dee49468040e","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"1bd9adb6-1807-42c1-b89f-70081b5003b8","type":"ColumnDataSource"},"glyph":{"id":"c6f58318-16e8-4acc-a0b0-0885ff9ed70d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a30aa49b-ee53-4836-9425-d9fc9c000fc1","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8e3901e1-055e-4830-ab29-464695e1873c","type":"Rect"},{"attributes":{},"id":"a0c7f4ee-a3f4-433b-961f-60f95018e792","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"1635f255-fe79-4825-8229-fca71c50115e","type":"ColumnDataSource"},"glyph":{"id":"cbe20d79-8488-42e6-92a4-a6900644af37","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f432354e-f22d-41eb-aa36-2b496d264221","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"59bf2393-0f86-4771-b9bc-2b63f3b4c2a3","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"591bb5b8-bc9b-4787-b013-a5e72ce6192a","subtype":"Chart","type":"Plot"},"ticker":{"id":"ddf7fb66-7346-4a44-b874-760a4851269e","type":"CategoricalTicker"}},"id":"ffd55669-3713-4101-9019-1d1e01178751","type":"CategoricalAxis"},{"attributes":{"overlay":{"id":"297b6975-cd34-447c-b021-17d7c217fc69","type":"BoxAnnotation"},"plot":{"id":"591bb5b8-bc9b-4787-b013-a5e72ce6192a","subtype":"Chart","type":"Plot"}},"id":"7cf65f48-c1ec-4fc7-91fc-a3bab348fea0","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"297b6975-cd34-447c-b021-17d7c217fc69","type":"BoxAnnotation"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7fadd3b1-3b34-454a-aa8f-53a9de0ac31c","type":"Rect"},{"attributes":{"callback":null,"end":23},"id":"1bd74e80-63e8-401c-996a-379455a704a9","type":"Range1d"},{"attributes":{"plot":{"id":"591bb5b8-bc9b-4787-b013-a5e72ce6192a","subtype":"Chart","type":"Plot"}},"id":"f67907d6-a204-424c-bb85-0799f63db563","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"cbe20d79-8488-42e6-92a4-a6900644af37","type":"Rect"},{"attributes":{},"id":"39868c89-8469-4bab-a023-a9778d4ceca8","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[3.7735849056603774,5.074074074074074,5.083333333333333,6.080645161290323],"x":[6,6,5,6],"y":["Monday","Tuesday","Saturday","Sunday"]}},"id":"1bd9adb6-1807-42c1-b89f-70081b5003b8","type":"ColumnDataSource"},{"attributes":{},"id":"59bf2393-0f86-4771-b9bc-2b63f3b4c2a3","type":"CategoricalTickFormatter"}],"root_ids":["034b61ae-ea17-4d57-99dc-f554f60a3171"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"0735a187-018b-4e06-9352-af641c8735df","elementid":"de327703-5b26-4a6f-9d84-c5923ce36576","modelid":"034b61ae-ea17-4d57-99dc-f554f60a3171"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});