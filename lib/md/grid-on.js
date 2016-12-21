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

var MdGridOn = function (_React$Component) {
    _inherits(MdGridOn, _React$Component);

    function MdGridOn() {
        _classCallCheck(this, MdGridOn);

        return _possibleConstructorReturn(this, (MdGridOn.__proto__ || Object.getPrototypeOf(MdGridOn)).apply(this, arguments));
    }

    _createClass(MdGridOn, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.4 13.4v-6.8h-6.8v6.8h6.8z m0 10v-6.8h-6.8v6.8h6.8z m0 10v-6.8h-6.8v6.8h6.8z m-10-20v-6.8h-6.8v6.8h6.8z m0 10v-6.8h-6.8v6.8h6.8z m0 10v-6.8h-6.8v6.8h6.8z m-10-20v-6.8h-6.8v6.8h6.8z m0 10v-6.8h-6.8v6.8h6.8z m0 10v-6.8h-6.8v6.8h6.8z m20-30c1.8 0 3.2 1.4 3.2 3.2v26.8c0 1.8-1.4 3.2-3.2 3.2h-26.8c-1.8 0-3.2-1.4-3.2-3.2v-26.8c0-1.8 1.4-3.2 3.2-3.2h26.8z' })
                )
            );
        }
    }]);

    return MdGridOn;
}(React.Component);

exports.default = MdGridOn;
module.exports = exports['default'];