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

var IoAperture = function (_React$Component) {
    _inherits(IoAperture, _React$Component);

    function IoAperture() {
        _classCallCheck(this, IoAperture);

        return _possibleConstructorReturn(this, (IoAperture.__proto__ || Object.getPrototypeOf(IoAperture)).apply(this, arguments));
    }

    _createClass(IoAperture, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 2.5c9.7 0 17.5 7.8 17.5 17.5s-7.8 17.5-17.5 17.5-17.5-7.8-17.5-17.5 7.8-17.5 17.5-17.5z m10.6 28.1c2.8-2.8 4.4-6.6 4.4-10.6s-1.6-7.8-4.4-10.6-6.6-4.4-10.6-4.4-7.8 1.6-10.6 4.4-4.4 6.6-4.4 10.6 1.6 7.8 4.4 10.6 6.6 4.4 10.6 4.4 7.8-1.6 10.6-4.4z m-15-22.3l4.4 6.7h-11.5c1.3-3.1 3.9-5.5 7.1-6.7z m16.7 14.2h-8l5.6-10.1c1.7 2.1 2.6 4.7 2.6 7.6 0 0.9-0.1 1.7-0.2 2.5z m-4.2-12l-3.8 7-6.1-9.8c0.6-0.1 1.2-0.2 1.8-0.2 3.1 0 5.9 1.1 8.1 3z m-20.4 7h8l-5.6 10.1c-1.7-2.1-2.6-4.7-2.6-7.6 0-0.9 0.1-1.7 0.2-2.5z m16.7 14.2l-4.4-6.7h11.5c-1.3 3.1-3.9 5.5-7.1 6.7z m-12.5-2.2l3.8-7 6.1 9.8c-0.6 0.1-1.2 0.2-1.8 0.2-3.1 0-5.9-1.1-8.1-3z' })
                )
            );
        }
    }]);

    return IoAperture;
}(React.Component);

exports.default = IoAperture;
module.exports = exports['default'];