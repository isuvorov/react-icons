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

var TiAnchorOutline = function (_React$Component) {
    _inherits(TiAnchorOutline, _React$Component);

    function TiAnchorOutline() {
        _classCallCheck(this, TiAnchorOutline);

        return _possibleConstructorReturn(this, (TiAnchorOutline.__proto__ || Object.getPrototypeOf(TiAnchorOutline)).apply(this, arguments));
    }

    _createClass(TiAnchorOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.7 10c0 0.9-0.8 1.7-1.7 1.7s-1.7-0.8-1.7-1.7c0-0.9 0.8-1.7 1.7-1.7s1.7 0.8 1.7 1.7z m11.3 10.2c0.2-0.6 0.3-1.2 0.3-1.9 0-2.7-2.2-5-5-5h-0.7c0.5-1 0.7-2.1 0.7-3.3 0-4.6-3.7-8.3-8.3-8.3s-8.3 3.7-8.3 8.3c0 1.2 0.2 2.3 0.7 3.3h-0.7c-2.8 0-5 2.3-5 5 0 0.7 0.1 1.3 0.3 1.9-1.2 0.9-2 2.3-2 4 0 8.2 6.7 15 15 15s15-6.8 15-15c0-1.7-0.8-3.1-2-4z m-13 15.6c-6.4 0-11.7-5.2-11.7-11.6 0-1 0.8-1.7 1.7-1.7s1.7 0.7 1.7 1.7c0 4 2.8 7.4 6.6 8.1v-12.3h-6.6c-1 0-1.7-0.7-1.7-1.7s0.7-1.6 1.7-1.6h6.6v-2c-1.9-0.7-3.3-2.5-3.3-4.7 0-2.8 2.2-5 5-5s5 2.2 5 5c0 2.2-1.4 4-3.3 4.7v2h6.6c1 0 1.7 0.7 1.7 1.6s-0.7 1.7-1.7 1.7h-6.6v12.3c3.8-0.7 6.6-4.1 6.6-8.1 0-1 0.8-1.7 1.7-1.7s1.7 0.7 1.7 1.7c0 6.4-5.3 11.6-11.7 11.6z m-7.8-14.1h4.5v8.2c-2-1.1-3.4-3.3-3.4-5.7 0-1-0.4-1.9-1.1-2.5z m15.6 0c-0.7 0.6-1.1 1.5-1.1 2.5 0 2.4-1.4 4.6-3.4 5.7v-8.2h4.5z' })
                )
            );
        }
    }]);

    return TiAnchorOutline;
}(React.Component);

exports.default = TiAnchorOutline;
module.exports = exports['default'];