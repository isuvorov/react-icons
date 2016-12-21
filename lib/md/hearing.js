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

var MdHearing = function (_React$Component) {
    _inherits(MdHearing, _React$Component);

    function MdHearing() {
        _classCallCheck(this, MdHearing);

        return _possibleConstructorReturn(this, (MdHearing.__proto__ || Object.getPrototypeOf(MdHearing)).apply(this, arguments));
    }

    _createClass(MdHearing, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.1 15c0-2.3 2-4.1 4.3-4.1s4.1 1.8 4.1 4.1-1.9 4.1-4.1 4.1-4.3-1.8-4.3-4.1z m-6.4-10.6c-2.7 2.7-4.3 6.5-4.3 10.6s1.6 7.9 4.3 10.6l-2.3 2.4c-3.3-3.3-5.4-7.9-5.4-13s2.1-9.7 5.4-13z m15.7 29c1.8 0 3.2-1.6 3.2-3.4h3.4c0 3.7-3 6.6-6.6 6.6-1 0-1.9-0.1-2.8-0.5-2.2-1.2-3.6-2.9-4.6-5.9-0.5-1.7-1.5-2.5-2.8-3.5-1.5-1.1-3.3-2.5-4.8-5.2-1.1-2.1-1.8-4.4-1.8-6.5 0-6.6 5.2-11.6 11.8-11.6s11.6 5 11.6 11.6h-3.4c0-4.7-3.6-8.4-8.2-8.4s-8.4 3.7-8.4 8.4c0 1.6 0.5 3.4 1.3 4.9 1.2 2.2 2.6 3.2 3.9 4.2 1.6 1.2 3.2 2.5 4 5 0.9 2.5 1.7 3.3 2.8 3.9 0.3 0.2 0.9 0.4 1.4 0.4z' })
                )
            );
        }
    }]);

    return MdHearing;
}(React.Component);

exports.default = MdHearing;
module.exports = exports['default'];