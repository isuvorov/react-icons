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

var MdGroupWork = function (_React$Component) {
    _inherits(MdGroupWork, _React$Component);

    function MdGroupWork() {
        _classCallCheck(this, MdGroupWork);

        return _possibleConstructorReturn(this, (MdGroupWork.__proto__ || Object.getPrototypeOf(MdGroupWork)).apply(this, arguments));
    }

    _createClass(MdGroupWork, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.6 29.1c2.3 0 4.3-1.8 4.3-4.1s-2-4.1-4.3-4.1-4.1 1.8-4.1 4.1 1.9 4.1 4.1 4.1z m-10.7-15.7c0 2.2 1.8 4.1 4.1 4.1s4.1-1.9 4.1-4.1-1.8-4.3-4.1-4.3-4.1 2-4.1 4.3z m-2.5 15.7c2.2 0 4.1-1.8 4.1-4.1s-1.9-4.1-4.1-4.1-4.3 1.8-4.3 4.1 2 4.1 4.3 4.1z m6.6-25.7c9.2 0 16.6 7.4 16.6 16.6s-7.4 16.6-16.6 16.6-16.6-7.4-16.6-16.6 7.4-16.6 16.6-16.6z' })
                )
            );
        }
    }]);

    return MdGroupWork;
}(React.Component);

exports.default = MdGroupWork;
module.exports = exports['default'];