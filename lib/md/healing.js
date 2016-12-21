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

var MdHealing = function (_React$Component) {
    _inherits(MdHealing, _React$Component);

    function MdHealing() {
        _classCallCheck(this, MdHealing);

        return _possibleConstructorReturn(this, (MdHealing.__proto__ || Object.getPrototypeOf(MdHealing)).apply(this, arguments));
    }

    _createClass(MdHealing, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.7 33.9l6.1-6.1-6.1-6-6 6.1z m-4.3-15.5c-1 0-1.8 0.7-1.8 1.6s0.8 1.6 1.8 1.6 1.6-0.7 1.6-1.6-0.7-1.6-1.6-1.6z m-3.4 6.6c0.9 0 1.6-0.7 1.6-1.6s-0.7-1.8-1.6-1.8-1.6 0.8-1.6 1.8 0.7 1.6 1.6 1.6z m-3.4-3.4c1 0 1.8-0.7 1.8-1.6s-0.8-1.6-1.8-1.6-1.6 0.7-1.6 1.6 0.7 1.6 1.6 1.6z m-4.4-3.3l6-6.1-6-6-6.1 6.1z m7.8-3.3c-0.9 0-1.6 0.7-1.6 1.6s0.7 1.8 1.6 1.8 1.6-0.8 1.6-1.8-0.7-1.6-1.6-1.6z m9.5 5l6.7 6.6c0.6 0.7 0.6 1.8 0 2.4l-7.2 7.3c-0.3 0.3-0.7 0.4-1.2 0.4s-0.9-0.1-1.2-0.4l-6.6-6.7-6.6 6.7c-0.7 0.6-1.8 0.6-2.4 0l-7.3-7.3c-0.6-0.6-0.6-1.7 0-2.4l6.7-6.6-6.6-6.6c-0.7-0.6-0.7-1.8 0-2.4l7.2-7.2c0.3-0.3 0.8-0.4 1.2-0.4 0.5 0 0.8 0.1 1.2 0.4l6.6 6.7 6.6-6.7c0.6-0.6 1.8-0.6 2.4 0l7.2 7.2c0.6 0.6 0.6 1.8 0 2.4z' })
                )
            );
        }
    }]);

    return MdHealing;
}(React.Component);

exports.default = MdHealing;
module.exports = exports['default'];