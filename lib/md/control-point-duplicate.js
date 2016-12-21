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

var MdControlPointDuplicate = function (_React$Component) {
    _inherits(MdControlPointDuplicate, _React$Component);

    function MdControlPointDuplicate() {
        _classCallCheck(this, MdControlPointDuplicate);

        return _possibleConstructorReturn(this, (MdControlPointDuplicate.__proto__ || Object.getPrototypeOf(MdControlPointDuplicate)).apply(this, arguments));
    }

    _createClass(MdControlPointDuplicate, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25 31.6q4.8 0 8.2-3.4t3.4-8.2-3.4-8.2-8.2-3.4-8.2 3.4-3.4 8.2 3.4 8.2 8.2 3.4z m0-26.6q6.3 0 10.6 4.4t4.4 10.6-4.4 10.6-10.6 4.4-10.6-4.4-4.4-10.6 4.4-10.6 10.6-4.4z m-21.6 15q0 3.4 1.8 6.3t4.8 4.2v3.6q-4.4-1.5-7.2-5.4t-2.8-8.7 2.8-8.7 7.2-5.4v3.5q-3 1.5-4.8 4.3t-1.8 6.3z m23.2-6.6v5h5v3.2h-5v5h-3.2v-5h-5v-3.2h5v-5h3.2z' })
                )
            );
        }
    }]);

    return MdControlPointDuplicate;
}(React.Component);

exports.default = MdControlPointDuplicate;
module.exports = exports['default'];