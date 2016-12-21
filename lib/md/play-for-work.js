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

var MdPlayForWork = function (_React$Component) {
    _inherits(MdPlayForWork, _React$Component);

    function MdPlayForWork() {
        _classCallCheck(this, MdPlayForWork);

        return _possibleConstructorReturn(this, (MdPlayForWork.__proto__ || Object.getPrototypeOf(MdPlayForWork)).apply(this, arguments));
    }

    _createClass(MdPlayForWork, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm10 23.4h3.4q0 2.7 1.9 4.6t4.7 2 4.7-1.9 1.9-4.7h3.4q0 4.1-2.9 7t-7.1 3-7.1-3-2.9-7z m8.4-15h3.2v9.3h5.9l-7.5 7.5-7.5-7.5h5.9v-9.3z' })
                )
            );
        }
    }]);

    return MdPlayForWork;
}(React.Component);

exports.default = MdPlayForWork;
module.exports = exports['default'];