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

var MdVolumeOff = function (_React$Component) {
    _inherits(MdVolumeOff, _React$Component);

    function MdVolumeOff() {
        _classCallCheck(this, MdVolumeOff);

        return _possibleConstructorReturn(this, (MdVolumeOff.__proto__ || Object.getPrototypeOf(MdVolumeOff)).apply(this, arguments));
    }

    _createClass(MdVolumeOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 6.6v7.1l-3.5-3.5z m-12.9-1.6l27.9 27.9-2.1 2.1-3.4-3.4c-1.8 1.4-3.9 2.5-6.1 3v-3.4c1.4-0.4 2.6-1.1 3.7-2l-7.1-7.1v11.3l-8.4-8.4h-6.6v-10h7.9l-7.9-7.9z m24.5 15c0-5.3-3.4-9.8-8.2-11.2v-3.4c6.7 1.5 11.6 7.5 11.6 14.6 0 2.5-0.6 4.9-1.7 7l-2.5-2.6c0.5-1.4 0.8-2.8 0.8-4.4z m-4.1 0c0 0.4 0 0.7-0.1 1l-4-4.1v-3.6c2.5 1.2 4.1 3.7 4.1 6.7z' })
                )
            );
        }
    }]);

    return MdVolumeOff;
}(React.Component);

exports.default = MdVolumeOff;
module.exports = exports['default'];