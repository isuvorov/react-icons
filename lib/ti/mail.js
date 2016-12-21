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

var TiMail = function (_React$Component) {
    _inherits(TiMail, _React$Component);

    function TiMail() {
        _classCallCheck(this, TiMail);

        return _possibleConstructorReturn(this, (TiMail.__proto__ || Object.getPrototypeOf(TiMail)).apply(this, arguments));
    }

    _createClass(TiMail, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.7 11.7h-23.4c-1.8 0-3.3 1.5-3.3 3.3v15c0 1.8 1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3v-15c0-1.8-1.5-3.3-3.3-3.3z m-16.2 12.2l2.7 2.3c0.5 0.4 1.1 0.7 1.8 0.7s1.3-0.3 1.8-0.7l2.7-2.3-0.1 0 6.1 6.1h-21l6.1-6.1-0.1 0z m-7.2 4.9v-11.2l6 5.2-6 6z m17.4-6l6-5.2v11.2l-6-6z m6-7.8v0.3l-11 9.6c-0.4 0.4-1 0.4-1.4 0l-11-9.6v-0.3h23.4z' })
                )
            );
        }
    }]);

    return TiMail;
}(React.Component);

exports.default = TiMail;
module.exports = exports['default'];