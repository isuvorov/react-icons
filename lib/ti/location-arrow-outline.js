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

var TiLocationArrowOutline = function (_React$Component) {
    _inherits(TiLocationArrowOutline, _React$Component);

    function TiLocationArrowOutline() {
        _classCallCheck(this, TiLocationArrowOutline);

        return _possibleConstructorReturn(this, (TiLocationArrowOutline.__proto__ || Object.getPrototypeOf(TiLocationArrowOutline)).apply(this, arguments));
    }

    _createClass(TiLocationArrowOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm18.5 34.9c-0.6 0-2.1-0.3-2.8-2.5l-2-6.1-6.1-2c-2-0.7-2.4-2-2.5-2.6s0.2-2 2.2-3l19-8.8c1.7-0.8 3.2-0.5 3.9 0.6 0.4 0.6 0.6 1.6-0.1 3.2l-8.8 19c-0.9 1.9-2.2 2.2-2.8 2.2z m-9-13.5l6.8 2.3 2.3 6.8 8-17.1-17.1 8z' })
                )
            );
        }
    }]);

    return TiLocationArrowOutline;
}(React.Component);

exports.default = TiLocationArrowOutline;
module.exports = exports['default'];