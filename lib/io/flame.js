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

var IoFlame = function (_React$Component) {
    _inherits(IoFlame, _React$Component);

    function IoFlame() {
        _classCallCheck(this, IoFlame);

        return _possibleConstructorReturn(this, (IoFlame.__proto__ || Object.getPrototypeOf(IoFlame)).apply(this, arguments));
    }

    _createClass(IoFlame, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm10.1 25c-0.9-8.5 5.6-17.5 12.4-22.5-2 11.3 7.6 11.1 7.5 22.5-0.1 9.4-8.2 12.5-10 12.5s-8.9-2-9.9-12.5z m6.8 3.8c0 3.4 3.1 6.2 3.1 6.2s3.2-2.8 3.2-6.2-3.2-6.3-3.2-6.3-3.1 2.8-3.1 6.3z' })
                )
            );
        }
    }]);

    return IoFlame;
}(React.Component);

exports.default = IoFlame;
module.exports = exports['default'];