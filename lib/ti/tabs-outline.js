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

var TiTabsOutline = function (_React$Component) {
    _inherits(TiTabsOutline, _React$Component);

    function TiTabsOutline() {
        _classCallCheck(this, TiTabsOutline);

        return _possibleConstructorReturn(this, (TiTabsOutline.__proto__ || Object.getPrototypeOf(TiTabsOutline)).apply(this, arguments));
    }

    _createClass(TiTabsOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 6.7h-16.7c-1.8 0-3.3 1.5-3.3 3.3v3.3h-1.7c-1.8 0-3.3 1.5-3.3 3.4v15c0 1.8 1.5 3.3 3.3 3.3h15c1.9 0 3.4-1.5 3.4-3.3v-1.7h3.3c1.8 0 3.3-1.5 3.3-3.3v-16.7c0-1.8-1.5-3.3-3.3-3.3z m-21.7 25v-15h14.2c0.5 0 0.8 0.3 0.8 0.8v14.2h-15z m21.7-5h-5v-9.2c0-1.4-1.1-2.5-2.5-2.5h-9.2v-5h16.7v16.7z' })
                )
            );
        }
    }]);

    return TiTabsOutline;
}(React.Component);

exports.default = TiTabsOutline;
module.exports = exports['default'];