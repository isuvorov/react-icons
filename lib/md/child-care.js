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

var MdChildCare = function (_React$Component) {
    _inherits(MdChildCare, _React$Component);

    function MdChildCare() {
        _classCallCheck(this, MdChildCare);

        return _possibleConstructorReturn(this, (MdChildCare.__proto__ || Object.getPrototypeOf(MdChildCare)).apply(this, arguments));
    }

    _createClass(MdChildCare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm12.5 23.4h15c-1.2 2.9-4.1 5-7.5 5s-6.2-2.1-7.5-5z m7.5 8.2c5.3 0 9.8-3.5 11.2-8.3 0.1 0 0.3 0.1 0.4 0.1 1.8 0 3.4-1.6 3.4-3.4s-1.6-3.4-3.4-3.4c-0.1 0-0.3 0.1-0.4 0.1-1.4-4.8-5.9-8.3-11.2-8.3s-9.8 3.5-11.2 8.3c-0.1 0-0.3-0.1-0.4-0.1-1.8 0-3.4 1.6-3.4 3.4s1.6 3.4 3.4 3.4c0.1 0 0.3-0.1 0.4-0.1 1.4 4.8 5.9 8.3 11.2 8.3z m18.2-10.5c-0.4 2.5-2.2 4.6-4.6 5.3-2.2 4.6-7.4 8.6-13.6 8.6-6.2 0-11.4-3.9-13.5-8.6-2.4-0.7-4.3-2.8-4.7-5.3-0.1-0.3-0.2-0.7-0.2-1.1s0.1-0.8 0.2-1.1c0.4-2.5 2.3-4.6 4.7-5.3 0.8-1.9 2-3.5 3.6-4.8 2.6-2.4 6.1-3.8 9.9-3.8 6.3 0 11.3 3.8 13.5 8.6 2.4 0.7 4.3 2.8 4.7 5.3 0.1 0.3 0.2 0.7 0.2 1.1s-0.1 0.8-0.2 1.1z m-24.4-3.6c0-1.2 0.9-2.1 2.1-2.1s2 0.9 2 2.1-0.9 2.1-2 2.1-2.1-0.9-2.1-2.1z m8.3 0c0-1.2 0.9-2.1 2-2.1s2.2 0.9 2.2 2.1-1 2.1-2.2 2.1-2-0.9-2-2.1z' })
                )
            );
        }
    }]);

    return MdChildCare;
}(React.Component);

exports.default = MdChildCare;
module.exports = exports['default'];