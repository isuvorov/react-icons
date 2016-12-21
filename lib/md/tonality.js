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

var MdTonality = function (_React$Component) {
    _inherits(MdTonality, _React$Component);

    function MdTonality() {
        _classCallCheck(this, MdTonality);

        return _possibleConstructorReturn(this, (MdTonality.__proto__ || Object.getPrototypeOf(MdTonality)).apply(this, arguments));
    }

    _createClass(MdTonality, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.9 23.4c0.1-0.6 0.2-1.2 0.3-1.8h-11.6v1.8h11.3z m-2.5 5c0.4-0.6 0.9-1.2 1.2-1.8h-10v1.8h8.8z m-8.8 4.8c1.8-0.2 3.4-0.8 4.9-1.6h-4.9v1.6z m0-16.6v1.8h11.6c-0.1-0.6-0.2-1.2-0.3-1.8h-11.3z m0-5v1.8h10c-0.4-0.6-0.8-1.2-1.2-1.8h-8.8z m0-4.8v1.6h4.9c-1.5-0.8-3.1-1.4-4.9-1.6z m-3.2 26.4v-26.4c-6.6 0.8-11.8 6.4-11.8 13.2s5.2 12.4 11.8 13.2z m1.6-29.8c9.2 0 16.6 7.4 16.6 16.6s-7.4 16.6-16.6 16.6-16.6-7.4-16.6-16.6 7.4-16.6 16.6-16.6z' })
                )
            );
        }
    }]);

    return MdTonality;
}(React.Component);

exports.default = MdTonality;
module.exports = exports['default'];