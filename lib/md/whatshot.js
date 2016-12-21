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

var MdWhatshot = function (_React$Component) {
    _inherits(MdWhatshot, _React$Component);

    function MdWhatshot() {
        _classCallCheck(this, MdWhatshot);

        return _possibleConstructorReturn(this, (MdWhatshot.__proto__ || Object.getPrototypeOf(MdWhatshot)).apply(this, arguments));
    }

    _createClass(MdWhatshot, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.5 31.6c4.5 0 8-3.5 8-7.9 0-2.4-0.3-4.6-0.9-6.7-1.8 2.2-4.8 3.6-7.8 4.3s-4.7 2.4-4.7 5.1c0 2.9 2.5 5.2 5.4 5.2z m3-30.5c6.5 5.2 10.9 13.3 10.9 22.3 0 7.3-6.1 13.2-13.4 13.2s-13.4-5.9-13.4-13.2c0-5.7 2.1-10.9 5.4-14.9v0.6c0 3.5 2.6 6.2 6 6.2s5.7-2.7 5.7-6.2c0-3.6-1.2-8-1.2-8z' })
                )
            );
        }
    }]);

    return MdWhatshot;
}(React.Component);

exports.default = MdWhatshot;
module.exports = exports['default'];