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

var MdAirlineSeatFlatAngled = function (_React$Component) {
    _inherits(MdAirlineSeatFlatAngled, _React$Component);

    function MdAirlineSeatFlatAngled() {
        _classCallCheck(this, MdAirlineSeatFlatAngled);

        return _possibleConstructorReturn(this, (MdAirlineSeatFlatAngled.__proto__ || Object.getPrototypeOf(MdAirlineSeatFlatAngled)).apply(this, arguments));
    }

    _createClass(MdAirlineSeatFlatAngled, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm12.2 17q-1.9 0.9-3.9 0.2t-2.8-2.5-0.2-3.9 2.5-2.8 3.9-0.2 2.8 2.5 0.2 3.9-2.5 2.8z m-9.7 3.2l1.2-3.1 31.6 11.4-1.1 3.1-7.6-2.6v2.6h-13.2v-7.5z m34.6 3.6l-1.2 3.2-20.6-7.5 3.5-9.4 14.2 5.1q2.7 1 3.9 3.5t0.2 5.1z' })
                )
            );
        }
    }]);

    return MdAirlineSeatFlatAngled;
}(React.Component);

exports.default = MdAirlineSeatFlatAngled;
module.exports = exports['default'];