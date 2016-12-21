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

var MdHeadset = function (_React$Component) {
    _inherits(MdHeadset, _React$Component);

    function MdHeadset() {
        _classCallCheck(this, MdHeadset);

        return _possibleConstructorReturn(this, (MdHeadset.__proto__ || Object.getPrototypeOf(MdHeadset)).apply(this, arguments));
    }

    _createClass(MdHeadset, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 1.6c8.3 0 15 6.8 15 15v11.8c0 2.7-2.3 5-5 5h-5v-13.4h6.6v-3.4c0-6.4-5.1-11.6-11.6-11.6s-11.6 5.2-11.6 11.6v3.4h6.6v13.4h-5c-2.7 0-5-2.3-5-5v-11.8c0-8.2 6.7-15 15-15z' })
                )
            );
        }
    }]);

    return MdHeadset;
}(React.Component);

exports.default = MdHeadset;
module.exports = exports['default'];