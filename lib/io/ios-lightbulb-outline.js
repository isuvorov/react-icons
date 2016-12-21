'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var IoIosLightbulbOutline = function (_React$Component) {
    _inherits(IoIosLightbulbOutline, _React$Component);

    function IoIosLightbulbOutline() {
        _classCallCheck(this, IoIosLightbulbOutline);

        return _possibleConstructorReturn(this, (IoIosLightbulbOutline.__proto__ || Object.getPrototypeOf(IoIosLightbulbOutline)).apply(this, arguments));
    }

    _createClass(IoIosLightbulbOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31 13.5c0 2.4-1 4.6-2.3 6.5-0.9 1.2-1.8 2.2-2.5 3.5-1.8 3-1.4 5.7-1.4 6.4v0.1h-10v-0.1c0-0.5 0.2-3.4-1.5-6.4-0.8-1.3-1.6-2.3-2.5-3.5-1.3-1.9-2.3-4.1-2.3-6.5 0-6.1 5.2-11 11.3-11s11.2 4.9 11.2 11z m-3.8 6.3l0.4-0.6c1.3-1.7 2.2-3.7 2.2-5.7 0-2.6-1.3-5.1-3.2-6.9s-4.3-2.8-6.8-2.8-5 0.9-6.9 2.8-3.1 4.3-3.1 6.9c0 2 0.8 4 2.1 5.7l1.4 2c0.4 0.5 0.7 1.1 1.1 1.7 1.3 2.3 1.6 4.5 1.6 5.8h1.2v-8.7l-2.5-5h1.4l2.4 5v8.8h2.5v-8.8l2.4-5h1.4l-2.5 5v8.8h1.2c0-1.4 0.3-3.6 1.6-5.9 0.7-1.1 1.3-2 1.9-2.8 0.1-0.1 0.1-0.2 0.2-0.3z m-9.9 17.7v-1.2h5v1.2h-5z m-1.3-2.5v-1.2h7.5v1.2h-7.5z m0-2.5v-1.2h7.5v1.2h-7.5z' })
                )
            );
        }
    }]);

    return IoIosLightbulbOutline;
}(React.Component);

exports.default = IoIosLightbulbOutline;
module.exports = exports['default'];