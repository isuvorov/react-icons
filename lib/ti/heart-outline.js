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

var TiHeartOutline = function (_React$Component) {
    _inherits(TiHeartOutline, _React$Component);

    function TiHeartOutline() {
        _classCallCheck(this, TiHeartOutline);

        return _possibleConstructorReturn(this, (TiHeartOutline.__proto__ || Object.getPrototypeOf(TiHeartOutline)).apply(this, arguments));
    }

    _createClass(TiHeartOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 33.3c-0.3 0-0.7-0.1-0.9-0.3-0.4-0.2-9.2-6.2-11.9-8.9-3.1-3.1-3.4-6.3-3.4-8.5 0-4.9 4-8.9 8.9-8.9 3 0 5.7 1.5 7.3 3.7 1.6-2.2 4.3-3.7 7.3-3.7 4.9 0 9 4 9 8.9 0 2.2-0.4 5.4-3.5 8.5-2.7 2.7-11.5 8.7-11.9 8.9-0.2 0.2-0.6 0.3-0.9 0.3z m-7.3-23.3c-3.1 0-5.6 2.5-5.6 5.6 0 1.8 0.3 4 2.4 6.1 2 2.1 8.2 6.3 10.5 7.9 2.4-1.6 8.5-5.8 10.5-7.9 2.1-2.1 2.4-4.3 2.4-6.1 0-3.1-2.5-5.6-5.6-5.6s-5.6 2.5-5.6 5.6c0 0.9-0.8 1.7-1.7 1.7s-1.7-0.8-1.7-1.7c0-3.1-2.5-5.6-5.6-5.6z' })
                )
            );
        }
    }]);

    return TiHeartOutline;
}(React.Component);

exports.default = TiHeartOutline;
module.exports = exports['default'];