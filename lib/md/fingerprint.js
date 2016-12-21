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

var MdFingerprint = function (_React$Component) {
    _inherits(MdFingerprint, _React$Component);

    function MdFingerprint() {
        _classCallCheck(this, MdFingerprint);

        return _possibleConstructorReturn(this, (MdFingerprint.__proto__ || Object.getPrototypeOf(MdFingerprint)).apply(this, arguments));
    }

    _createClass(MdFingerprint, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm24.8 36.6h-0.2c-2.6-0.7-4.4-1.7-6.2-3.5-2.3-2.3-3.6-5.4-3.6-8.6 0-2.8 2.3-5 5.1-5s5.2 2.2 5.2 5c0 1.7 1.5 3.2 3.4 3.2s3.5-1.5 3.5-3.2c0-6.3-5.4-11.5-12.1-11.5-4.7 0-9 2.7-11 6.8-0.6 1.3-0.9 2.9-0.9 4.7 0 1.3 0 3.3 1.1 6 0.3 1-1.2 1.4-1.6 0.5-0.8-2.2-1.3-4.3-1.3-6.6 0-2 0.4-3.8 1.2-5.3 2.2-4.7 7.1-7.8 12.5-7.8 7.6 0 13.8 6 13.8 13.1 0 2.8-2.4 4.9-5.2 4.9s-5.1-2.1-5.1-4.9c0-1.7-1.5-3.2-3.5-3.2s-3.4 1.5-3.4 3.3c0 2.8 1.1 5.4 3.1 7.5 1.6 1.5 3.1 2.4 5.5 3 0.4 0.1 0.6 0.5 0.5 1-0.1 0.4-0.4 0.6-0.8 0.6z m-4.1-12.1c0 3.8 3.2 7.1 7.5 7.1 0.8 0 2.6-0.6 2.7 0.4 0.1 0.5-0.2 1-0.7 1-0.9 0.2-1.8 0.2-2 0.2-1.9 0-3.7-0.5-5.2-1.5-2.5-1.7-3.9-4.4-3.9-7.2 0-0.5 0.4-0.9 0.8-0.9s0.8 0.4 0.8 0.9z m-4.4 11.8c-0.3 0-0.4 0-0.6-0.2-1.5-1.5-2.3-2.4-3.4-4.5-1.1-2-1.8-4.5-1.8-7.1 0-5 4.3-9 9.5-9s9.5 4 9.5 9c0 0.4-0.4 0.7-0.9 0.7s-0.9-0.3-0.9-0.7c0-4.1-3.4-7.4-7.7-7.4s-7.7 3.3-7.7 7.4c0 2.4 0.4 4.6 1.4 6.4 1.1 1.9 1.9 2.7 3.2 4 0.3 0.3 0.3 0.9 0 1.2-0.2 0.2-0.4 0.2-0.7 0.2z m-10.4-20.1c-0.7 0-1.1-0.6-0.7-1.3 1.6-2.3 3.7-4.2 6.2-5.4 5.2-2.8 12-2.8 17.2 0 2.5 1.2 4.6 3 6.2 5.3 0.3 0.4 0.2 1-0.2 1.2s-0.9 0.2-1.2-0.2c-1.4-2.1-3.3-3.7-5.6-4.9-4.8-2.4-10.8-2.5-15.6 0-2.3 1.2-4.2 2.8-5.7 5-0.2 0.2-0.4 0.3-0.6 0.3z m23.8-8.8c-0.2 0-0.3 0-0.4-0.1-3.2-1.6-6-2.3-9.3-2.3s-6.5 0.8-9.3 2.3c-0.9 0.6-1.7-0.9-0.8-1.4 3.1-1.8 6.5-2.5 10.1-2.5 3.5 0 6.6 0.7 10.1 2.5 0.7 0.4 0.4 1.5-0.4 1.5z' })
                )
            );
        }
    }]);

    return MdFingerprint;
}(React.Component);

exports.default = MdFingerprint;
module.exports = exports['default'];