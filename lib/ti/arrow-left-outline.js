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

var TiArrowLeftOutline = function (_React$Component) {
    _inherits(TiArrowLeftOutline, _React$Component);

    function TiArrowLeftOutline() {
        _classCallCheck(this, TiArrowLeftOutline);

        return _possibleConstructorReturn(this, (TiArrowLeftOutline.__proto__ || Object.getPrototypeOf(TiArrowLeftOutline)).apply(this, arguments));
    }

    _createClass(TiArrowLeftOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm18.2 35c-1.3 0-2.6-0.5-3.5-1.5l-11.9-11.8 11.9-11.9c1.9-1.9 5.2-1.9 7 0 1 0.9 1.5 2.2 1.5 3.5 0 1.3-0.4 2.5-1.3 3.4h8.1c2.8 0 5 2.2 5 5s-2.2 5-5 5h-8.1c0.9 0.9 1.3 2.1 1.3 3.3 0 1.3-0.5 2.6-1.5 3.5-0.9 1-2.2 1.5-3.5 1.5z m-10.7-13.3l9.5 9.5c0.7 0.6 1.8 0.6 2.4 0 0.3-0.3 0.5-0.8 0.5-1.2s-0.2-0.9-0.5-1.2l-5.5-5.5h16.1c0.9 0 1.7-0.7 1.7-1.6s-0.8-1.7-1.7-1.7h-16.1l5.5-5.5c0.3-0.3 0.5-0.7 0.5-1.2s-0.2-0.8-0.5-1.1c-0.6-0.7-1.7-0.7-2.4 0l-9.5 9.5z' })
                )
            );
        }
    }]);

    return TiArrowLeftOutline;
}(React.Component);

exports.default = TiArrowLeftOutline;
module.exports = exports['default'];