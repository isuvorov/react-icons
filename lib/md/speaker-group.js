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

var MdSpeakerGroup = function (_React$Component) {
    _inherits(MdSpeakerGroup, _React$Component);

    function MdSpeakerGroup() {
        _classCallCheck(this, MdSpeakerGroup);

        return _possibleConstructorReturn(this, (MdSpeakerGroup.__proto__ || Object.getPrototypeOf(MdSpeakerGroup)).apply(this, arguments));
    }

    _createClass(MdSpeakerGroup, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm10 8.4v26.6h16.6v3.4h-16.6c-1.9 0-3.4-1.6-3.4-3.4v-26.6h3.4z m9.1 12.5c0-2.3 2-4.3 4.3-4.3s4.1 2 4.1 4.3-1.9 4.1-4.1 4.1-4.3-1.9-4.3-4.1z m4.3 6.6c3.6 0 6.6-3 6.6-6.6s-3-6.8-6.6-6.8-6.8 3.1-6.8 6.8 3.1 6.6 6.8 6.6z m0-22.5c-1.8 0-3.4 1.5-3.4 3.4s1.6 3.2 3.4 3.2 3.2-1.4 3.2-3.2-1.4-3.4-3.2-3.4z m6.9-3.4c1.7 0 3.1 1.4 3.1 3.1v24c0 1.6-1.4 2.9-3.1 2.9h-14c-1.6 0-2.9-1.3-2.9-2.9v-24c0-1.7 1.3-3.1 2.9-3.1h14z' })
                )
            );
        }
    }]);

    return MdSpeakerGroup;
}(React.Component);

exports.default = MdSpeakerGroup;
module.exports = exports['default'];