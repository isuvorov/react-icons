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

var IoBag = function (_React$Component) {
    _inherits(IoBag, _React$Component);

    function IoBag() {
        _classCallCheck(this, IoBag);

        return _possibleConstructorReturn(this, (IoBag.__proto__ || Object.getPrototypeOf(IoBag)).apply(this, arguments));
    }

    _createClass(IoBag, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.5 12.5l2.5 25h-35l2.5-25h5v-0.3c0-5.3 4.4-9.7 9.7-9.7h0.6c5.3 0 9.7 4.4 9.7 9.7v0.3h5z m-22.5-0.3v0.3h15v-0.3c0-4-3.2-7.2-7.2-7.2h-0.6c-4 0-7.2 3.2-7.2 7.2z m-7.2 22.8h29.4l-2-20h-2.7v2.8c0.8 0.5 1.3 1.3 1.3 2.2 0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5c0-0.9 0.4-1.7 1.2-2.2v-2.8h-15v2.8c0.8 0.5 1.3 1.3 1.3 2.2 0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5c0-0.9 0.4-1.7 1.2-2.2v-2.8h-2.7z' })
                )
            );
        }
    }]);

    return IoBag;
}(React.Component);

exports.default = IoBag;
module.exports = exports['default'];