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
      };var element = document.getElementById("a0b46fc3-a1f5-46bd-8b81-79b451dc6eab");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a0b46fc3-a1f5-46bd-8b81-79b451dc6eab' but no matching script tag was found. ")
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
                  var docs_json = {"c07200a5-b805-4a37-bb64-a7895323a582":{"roots":{"references":[{"attributes":{"overlay":{"id":"2cf919ad-4bdd-44e6-ae10-a22bd09d00b4","type":"BoxAnnotation"},"plot":{"id":"62dc8123-e264-4cd7-9e76-f83ab5698bc1","subtype":"Chart","type":"Plot"}},"id":"2f1e8640-1a42-4da6-8842-fcfd7af24c5b","type":"BoxZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e2d96b36-085b-4451-a6b7-ade9b114a7f0","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[12.166666666666666,11.545454545454545],"x":[14,10],"y":["Thursday","Sunday"]}},"id":"f124b045-6824-46cb-bc38-12af832cc962","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[1.0,2.727272727272727,2.0,2.0714285714285716,1.5833333333333333,3.3333333333333335,2.5833333333333335,2.75,1.25,0.0,0.0,0.2222222222222222,0.0,0.0],"x":[9,10,14,12,10,11,12,11,12,7,8,9,11,14],"y":["Monday","Monday","Monday","Tuesday","Wednesday","Thursday","Thursday","Friday","Friday","Sunday","Sunday","Sunday","Sunday","Sunday"]}},"id":"2d4749ae-f608-4229-a3a2-f3662c2da244","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6943e0b7-6bff-4f18-8ed0-1e252348a303","type":"Rect"},{"attributes":{"plot":{"id":"acddd6dd-8265-4879-b71f-b0cb86886135","subtype":"Chart","type":"Plot"}},"id":"7e5c010a-cb03-4cf4-bd0e-578fa6360e5b","type":"HelpTool"},{"attributes":{"data_source":{"id":"f124b045-6824-46cb-bc38-12af832cc962","type":"ColumnDataSource"},"glyph":{"id":"f791018c-3b17-481c-a5b0-bdb39a969f53","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fc0e46bc-162a-4a69-ab7f-6297e40b88c1","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"cf30f98e-6625-4d99-88f2-76c2d8837acd","type":"ColumnDataSource"},"glyph":{"id":"68ff3e52-5ba8-4eb6-ad74-958f1c37bdd7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"483cd851-643a-4834-b379-f5e5793fdfd1","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"acddd6dd-8265-4879-b71f-b0cb86886135","subtype":"Chart","type":"Plot"}},"id":"a83c60a4-cbe4-4cbb-b05d-030acb7f5203","type":"PanTool"},{"attributes":{},"id":"dd8b0652-876f-4778-a548-898141495ce9","type":"CategoricalTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b0c0d300-fd4e-4da8-b65f-7b433eb26127","type":"Rect"},{"attributes":{"overlay":{"id":"d223f097-54f2-4ffc-9616-dce3ccaec849","type":"BoxAnnotation"},"plot":{"id":"acddd6dd-8265-4879-b71f-b0cb86886135","subtype":"Chart","type":"Plot"}},"id":"2bcefeac-0e59-41c1-b681-168bc2f0037f","type":"BoxZoomTool"},{"attributes":{},"id":"a5ac649c-8082-4ac7-8dac-9ad480e6bbc0","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"62dc8123-e264-4cd7-9e76-f83ab5698bc1","subtype":"Chart","type":"Plot"}},"id":"9bc8def5-2279-4c71-b28c-2ff94b4bc6d2","type":"SaveTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"9963533a-ac20-4428-b85d-e2f8725e2cfb","type":"BasicTickFormatter"},"plot":{"id":"62dc8123-e264-4cd7-9e76-f83ab5698bc1","subtype":"Chart","type":"Plot"},"ticker":{"id":"a14e6949-14f1-42ee-b3e3-8dbc939f7feb","type":"BasicTicker"}},"id":"b0332356-2cb2-42b0-9cc8-3bfeb5d9ee76","type":"LinearAxis"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"5c1588dc-ff2e-432e-b320-677eaebce26c","type":"LinearAxis"}],"left":[{"id":"8a6b39ea-bef9-4825-ae6c-29a33f263869","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"d223f097-54f2-4ffc-9616-dce3ccaec849","type":"BoxAnnotation"},{"id":"3a9a45fb-95a2-44ce-a7ce-76ca34de2568","type":"GlyphRenderer"},{"id":"116a1f68-5bb2-4237-bb19-62f8f9ec15fe","type":"GlyphRenderer"},{"id":"fc0e46bc-162a-4a69-ab7f-6297e40b88c1","type":"GlyphRenderer"},{"id":"b0c58c14-2653-447e-8c52-130771017a50","type":"GlyphRenderer"},{"id":"483cd851-643a-4834-b379-f5e5793fdfd1","type":"GlyphRenderer"},{"id":"1a0edf82-37a3-42dd-94a7-d1001844e912","type":"GlyphRenderer"},{"id":"5c1588dc-ff2e-432e-b320-677eaebce26c","type":"LinearAxis"},{"id":"8a6b39ea-bef9-4825-ae6c-29a33f263869","type":"CategoricalAxis"},{"id":"bc9c87ea-7edf-405c-82c1-9b678f204b02","type":"ColorBar"}],"right":[{"id":"bc9c87ea-7edf-405c-82c1-9b678f204b02","type":"ColorBar"}],"title":{"id":"d53dfe92-7fb8-40ba-94e9-d6cbe175ba61","type":"Title"},"tool_events":{"id":"72bde3c2-7e71-4256-80f3-987a63e87d7c","type":"ToolEvents"},"toolbar":{"id":"c4e9b7ec-b870-4984-8bee-ce39c4d1480d","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"c4849a5a-518c-40e2-8588-ea56f0ec8c0a","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"e38c4ee5-3e54-4744-ab1a-d4dcfc76d661","type":"FactorRange"}},"id":"acddd6dd-8265-4879-b71f-b0cb86886135","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[19.444444444444443],"x":[9],"y":["Thursday"]}},"id":"8384ce34-db2a-410e-9f1b-c839484f1595","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f25ba210-4f1c-473e-99f8-2873e507ab9f","type":"Rect"},{"attributes":{"data_source":{"id":"97d9828c-f0af-44a5-9e70-74983fafb954","type":"ColumnDataSource"},"glyph":{"id":"8706d688-7478-4c1b-b181-38002751d6b6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4b43a90f-c665-4025-9a33-fe9e81d81b95","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"8ab5441a-12ef-4ff1-bdf2-8524de0c2b82","type":"ColumnDataSource"},"glyph":{"id":"1aeeb578-3e1f-4245-8aaf-3dde5fbf2d10","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b0c58c14-2653-447e-8c52-130771017a50","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"acddd6dd-8265-4879-b71f-b0cb86886135","subtype":"Chart","type":"Plot"}},"id":"868d98bc-4728-45e5-887a-96f965ef0a50","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[19.444444444444443],"x":[9],"y":["Thursday"]}},"id":"d95c7759-fc20-4f65-bdef-989058595567","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"62dc8123-e264-4cd7-9e76-f83ab5698bc1","subtype":"Chart","type":"Plot"}},"id":"d9bbb551-dfe5-45f2-b174-a4ea5383ffeb","type":"PanTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"b0332356-2cb2-42b0-9cc8-3bfeb5d9ee76","type":"LinearAxis"}],"left":[{"id":"ac522060-480e-4267-9288-769605b10057","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"2cf919ad-4bdd-44e6-ae10-a22bd09d00b4","type":"BoxAnnotation"},{"id":"826034bc-7a02-4f38-aee9-6f4e4daf0d01","type":"GlyphRenderer"},{"id":"83dce9c4-3af0-4972-8d8d-073792328bbf","type":"GlyphRenderer"},{"id":"7a8d523a-bee8-41f0-b98c-7dc875dd7979","type":"GlyphRenderer"},{"id":"36badbec-52e3-48f8-8a84-c0c2ac6633a2","type":"GlyphRenderer"},{"id":"917d5edd-f409-48f3-9414-d017801b3b57","type":"GlyphRenderer"},{"id":"4b43a90f-c665-4025-9a33-fe9e81d81b95","type":"GlyphRenderer"},{"id":"b0332356-2cb2-42b0-9cc8-3bfeb5d9ee76","type":"LinearAxis"},{"id":"ac522060-480e-4267-9288-769605b10057","type":"CategoricalAxis"},{"id":"153aecf8-7111-4b6e-982e-7bccfb6af9df","type":"ColorBar"}],"right":[{"id":"153aecf8-7111-4b6e-982e-7bccfb6af9df","type":"ColorBar"}],"title":{"id":"f7bda65f-362e-4892-88a4-f3decd227e34","type":"Title"},"tool_events":{"id":"bbc4c5a2-2a9e-4c4d-b7fb-aaa7f3b4c304","type":"ToolEvents"},"toolbar":{"id":"0e49191d-b80f-437e-9fda-1412cda026e1","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"ff667435-1cdb-413f-b4c4-9d2a0cb19bc2","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"6cf4756e-fb95-4ba5-badb-0bcc9570e40b","type":"FactorRange"}},"id":"62dc8123-e264-4cd7-9e76-f83ab5698bc1","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"49a54839-d95c-4219-9b83-028e3d556bfc","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"455b5efb-1c06-4acd-af54-37298e3033aa","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2cf919ad-4bdd-44e6-ae10-a22bd09d00b4","type":"BoxAnnotation"},{"attributes":{},"id":"9963533a-ac20-4428-b85d-e2f8725e2cfb","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0],"x":[11,9,14],"y":["Monday","Wednesday","Friday"]}},"id":"2a6ac71f-5eb7-4a4c-b074-a1826b621b1f","type":"ColumnDataSource"},{"attributes":{"color_mapper":{"id":"ed895643-a897-422f-9b26-99445c413c3a","type":"LinearColorMapper"},"formatter":{"id":"183e49dc-f1c5-44a8-88f1-d14ef69c275b","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"62dc8123-e264-4cd7-9e76-f83ab5698bc1","subtype":"Chart","type":"Plot"},"ticker":{"id":"febc65f3-32b7-4272-9e09-ec62f4aead69","type":"BasicTicker"}},"id":"153aecf8-7111-4b6e-982e-7bccfb6af9df","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"68ff3e52-5ba8-4eb6-ad74-958f1c37bdd7","type":"Rect"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"e38c4ee5-3e54-4744-ab1a-d4dcfc76d661","type":"FactorRange"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"6cf4756e-fb95-4ba5-badb-0bcc9570e40b","type":"FactorRange"},{"attributes":{"plot":{"id":"62dc8123-e264-4cd7-9e76-f83ab5698bc1","subtype":"Chart","type":"Plot"}},"id":"c3db621a-7235-449c-8d75-b5779bbb4bfe","type":"ResetTool"},{"attributes":{},"id":"e82ca1c6-e525-4191-aa12-9150c08a26d7","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"acddd6dd-8265-4879-b71f-b0cb86886135","subtype":"Chart","type":"Plot"}},"id":"5063f221-c9f3-4156-a2a5-44559643101e","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"acddd6dd-8265-4879-b71f-b0cb86886135","subtype":"Chart","type":"Plot"}},"id":"0592fb67-d9be-40fd-b5e7-ee117c6a3b85","type":"ResetTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f791018c-3b17-481c-a5b0-bdb39a969f53","type":"Rect"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"d53dfe92-7fb8-40ba-94e9-d6cbe175ba61","type":"Title"},{"attributes":{},"id":"a14e6949-14f1-42ee-b3e3-8dbc939f7feb","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"34cda12e-28b4-4f45-81fe-df96fa09a0c5","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1aeeb578-3e1f-4245-8aaf-3dde5fbf2d10","type":"Rect"},{"attributes":{},"id":"d650ddc8-451f-400b-ad06-305e0881e384","type":"BasicTicker"},{"attributes":{},"id":"72bde3c2-7e71-4256-80f3-987a63e87d7c","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[12.166666666666666,11.545454545454545],"x":[14,10],"y":["Thursday","Sunday"]}},"id":"35d81923-1ced-4001-9e23-2761332b6b61","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[1.0,2.727272727272727,2.0,2.0714285714285716,1.5833333333333333,3.3333333333333335,2.5833333333333335,2.75,1.25,0.0,0.0,0.2222222222222222,0.0,0.0],"x":[9,10,14,12,10,11,12,11,12,7,8,9,11,14],"y":["Monday","Monday","Monday","Tuesday","Wednesday","Thursday","Thursday","Friday","Friday","Sunday","Sunday","Sunday","Sunday","Sunday"]}},"id":"97d9828c-f0af-44a5-9e70-74983fafb954","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":23},"id":"c4849a5a-518c-40e2-8588-ea56f0ec8c0a","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[7.142857142857143,7.076923076923077,6.88,8.083333333333334],"x":[12,10,10,14],"y":["Monday","Thursday","Saturday","Saturday"]}},"id":"8ab5441a-12ef-4ff1-bdf2-8524de0c2b82","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"35d81923-1ced-4001-9e23-2761332b6b61","type":"ColumnDataSource"},"glyph":{"id":"34cda12e-28b4-4f45-81fe-df96fa09a0c5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7a8d523a-bee8-41f0-b98c-7dc875dd7979","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"d25a938d-c52f-4666-82ad-5ba1c7da1678","type":"ColumnDataSource"},"glyph":{"id":"e2d96b36-085b-4451-a6b7-ade9b114a7f0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"36badbec-52e3-48f8-8a84-c0c2ac6633a2","type":"GlyphRenderer"},{"attributes":{},"id":"b660ac10-ef61-4098-a928-e53f35c9ed3a","type":"CategoricalTickFormatter"},{"attributes":{},"id":"edd5d7dc-4dc2-4fbd-a692-a9190bccef2a","type":"CategoricalTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d223f097-54f2-4ffc-9616-dce3ccaec849","type":"BoxAnnotation"},{"attributes":{},"id":"bbc4c5a2-2a9e-4c4d-b7fb-aaa7f3b4c304","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a83c60a4-cbe4-4cbb-b05d-030acb7f5203","type":"PanTool"},{"id":"5063f221-c9f3-4156-a2a5-44559643101e","type":"WheelZoomTool"},{"id":"2bcefeac-0e59-41c1-b681-168bc2f0037f","type":"BoxZoomTool"},{"id":"868d98bc-4728-45e5-887a-96f965ef0a50","type":"SaveTool"},{"id":"0592fb67-d9be-40fd-b5e7-ee117c6a3b85","type":"ResetTool"},{"id":"7e5c010a-cb03-4cf4-bd0e-578fa6360e5b","type":"HelpTool"}]},"id":"c4e9b7ec-b870-4984-8bee-ce39c4d1480d","type":"Toolbar"},{"attributes":{"callback":null,"end":23},"id":"ff667435-1cdb-413f-b4c4-9d2a0cb19bc2","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8706d688-7478-4c1b-b181-38002751d6b6","type":"Rect"},{"attributes":{"child":{"id":"62dc8123-e264-4cd7-9e76-f83ab5698bc1","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"8ca74145-05c0-441e-88fd-b636b096d69a","type":"Panel"},{"attributes":{"data_source":{"id":"2d4749ae-f608-4229-a3a2-f3662c2da244","type":"ColumnDataSource"},"glyph":{"id":"6943e0b7-6bff-4f18-8ed0-1e252348a303","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1a0edf82-37a3-42dd-94a7-d1001844e912","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"d95c7759-fc20-4f65-bdef-989058595567","type":"ColumnDataSource"},"glyph":{"id":"e7e33e98-91c4-4b04-92f6-08932b935dfd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"116a1f68-5bb2-4237-bb19-62f8f9ec15fe","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"b660ac10-ef61-4098-a928-e53f35c9ed3a","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"acddd6dd-8265-4879-b71f-b0cb86886135","subtype":"Chart","type":"Plot"},"ticker":{"id":"a5ac649c-8082-4ac7-8dac-9ad480e6bbc0","type":"CategoricalTicker"}},"id":"8a6b39ea-bef9-4825-ae6c-29a33f263869","type":"CategoricalAxis"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"ed895643-a897-422f-9b26-99445c413c3a","type":"LinearColorMapper"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ff8d4f94-ff77-4fdf-9ed5-750e47297526","type":"Rect"},{"attributes":{"plot":{"id":"62dc8123-e264-4cd7-9e76-f83ab5698bc1","subtype":"Chart","type":"Plot"}},"id":"dd425a75-dcba-4c1a-88c9-6b0220ac3b71","type":"WheelZoomTool"},{"attributes":{},"id":"598c798c-2e2f-48ec-a24b-8660d7aaf653","type":"BasicTicker"},{"attributes":{"data_source":{"id":"47fc96f0-3252-4a4f-a07c-c40e019c292c","type":"ColumnDataSource"},"glyph":{"id":"f25ba210-4f1c-473e-99f8-2873e507ab9f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3a9a45fb-95a2-44ce-a7ce-76ca34de2568","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e7e33e98-91c4-4b04-92f6-08932b935dfd","type":"Rect"},{"attributes":{"data_source":{"id":"8384ce34-db2a-410e-9f1b-c839484f1595","type":"ColumnDataSource"},"glyph":{"id":"455b5efb-1c06-4acd-af54-37298e3033aa","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"83dce9c4-3af0-4972-8d8d-073792328bbf","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"c4e8bc74-0a9d-4ab4-a50c-23033eb53ad5","type":"ColumnDataSource"},"glyph":{"id":"b0c0d300-fd4e-4da8-b65f-7b433eb26127","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"917d5edd-f409-48f3-9414-d017801b3b57","type":"GlyphRenderer"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"e82ca1c6-e525-4191-aa12-9150c08a26d7","type":"BasicTickFormatter"},"plot":{"id":"acddd6dd-8265-4879-b71f-b0cb86886135","subtype":"Chart","type":"Plot"},"ticker":{"id":"598c798c-2e2f-48ec-a24b-8660d7aaf653","type":"BasicTicker"}},"id":"5c1588dc-ff2e-432e-b320-677eaebce26c","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[5.222222222222222,4.75,4.777777777777778,6.181818181818182,4.8,5.3076923076923075,4.25,5.666666666666667,4.923076923076923,4.4,4.714285714285714],"x":[9,10,11,14,11,12,14,9,10,13,12],"y":["Tuesday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Friday","Friday","Saturday","Sunday"]}},"id":"cf30f98e-6625-4d99-88f2-76c2d8837acd","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"f7bda65f-362e-4892-88a4-f3decd227e34","type":"Title"},{"attributes":{"color_mapper":{"id":"8e350795-69c8-418e-8254-ed1cd130b98e","type":"LinearColorMapper"},"formatter":{"id":"49a54839-d95c-4219-9b83-028e3d556bfc","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"acddd6dd-8265-4879-b71f-b0cb86886135","subtype":"Chart","type":"Plot"},"ticker":{"id":"d650ddc8-451f-400b-ad06-305e0881e384","type":"BasicTicker"}},"id":"bc9c87ea-7edf-405c-82c1-9b678f204b02","type":"ColorBar"},{"attributes":{},"id":"febc65f3-32b7-4272-9e09-ec62f4aead69","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0],"x":[11,9,14],"y":["Monday","Wednesday","Friday"]}},"id":"47fc96f0-3252-4a4f-a07c-c40e019c292c","type":"ColumnDataSource"},{"attributes":{"callback":null,"tabs":[{"id":"54f51cb3-612b-4c92-a555-aae984cbfa10","type":"Panel"},{"id":"8ca74145-05c0-441e-88fd-b636b096d69a","type":"Panel"}]},"id":"f6b79827-d2d7-4d4e-8d17-ea75671fde51","type":"Tabs"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"dd8b0652-876f-4778-a548-898141495ce9","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"62dc8123-e264-4cd7-9e76-f83ab5698bc1","subtype":"Chart","type":"Plot"},"ticker":{"id":"edd5d7dc-4dc2-4fbd-a692-a9190bccef2a","type":"CategoricalTicker"}},"id":"ac522060-480e-4267-9288-769605b10057","type":"CategoricalAxis"},{"attributes":{"child":{"id":"acddd6dd-8265-4879-b71f-b0cb86886135","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"54f51cb3-612b-4c92-a555-aae984cbfa10","type":"Panel"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"8e350795-69c8-418e-8254-ed1cd130b98e","type":"LinearColorMapper"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[7.142857142857143,7.076923076923077,6.88,8.083333333333334],"x":[12,10,10,14],"y":["Monday","Thursday","Saturday","Saturday"]}},"id":"d25a938d-c52f-4666-82ad-5ba1c7da1678","type":"ColumnDataSource"},{"attributes":{},"id":"183e49dc-f1c5-44a8-88f1-d14ef69c275b","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"62dc8123-e264-4cd7-9e76-f83ab5698bc1","subtype":"Chart","type":"Plot"}},"id":"2f308b31-bf77-4544-8577-e386861169e1","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d9bbb551-dfe5-45f2-b174-a4ea5383ffeb","type":"PanTool"},{"id":"dd425a75-dcba-4c1a-88c9-6b0220ac3b71","type":"WheelZoomTool"},{"id":"2f1e8640-1a42-4da6-8842-fcfd7af24c5b","type":"BoxZoomTool"},{"id":"9bc8def5-2279-4c71-b28c-2ff94b4bc6d2","type":"SaveTool"},{"id":"c3db621a-7235-449c-8d75-b5779bbb4bfe","type":"ResetTool"},{"id":"2f308b31-bf77-4544-8577-e386861169e1","type":"HelpTool"}]},"id":"0e49191d-b80f-437e-9fda-1412cda026e1","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[5.222222222222222,4.75,4.777777777777778,6.181818181818182,4.8,5.3076923076923075,4.25,5.666666666666667,4.923076923076923,4.4,4.714285714285714],"x":[9,10,11,14,11,12,14,9,10,13,12],"y":["Tuesday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Friday","Friday","Saturday","Sunday"]}},"id":"c4e8bc74-0a9d-4ab4-a50c-23033eb53ad5","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2a6ac71f-5eb7-4a4c-b074-a1826b621b1f","type":"ColumnDataSource"},"glyph":{"id":"ff8d4f94-ff77-4fdf-9ed5-750e47297526","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"826034bc-7a02-4f38-aee9-6f4e4daf0d01","type":"GlyphRenderer"}],"root_ids":["f6b79827-d2d7-4d4e-8d17-ea75671fde51"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"c07200a5-b805-4a37-bb64-a7895323a582","elementid":"a0b46fc3-a1f5-46bd-8b81-79b451dc6eab","modelid":"f6b79827-d2d7-4d4e-8d17-ea75671fde51"}];
                  
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